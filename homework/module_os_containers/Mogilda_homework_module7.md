# Домашнє завдання — Модуль 7
**Варіант A: Аналіз життєвого циклу контейнера**

---

## 1. Запуск контейнера

```bash
docker run -d -p 8080:8080 --name myapp python:3.11-slim python3 -m http.server 8080
```

**Результат:**
da751d0b38d84decd823901ad4239746e347a5174b1b9e9baec86f63ea4b5b4c

- `-d` — запуск у фоновому режимі
- `-p 8080:8080` — NAT між хостом і контейнером
- `--name myapp` — ім'я контейнера
- `python3 -m http.server 8080` — простий HTTP-сервер, стає PID 1

---

## 2. Процес — PID 1

```bash
docker exec myapp cat /proc/1/cmdline | tr '\0' ' '
```

**Результат:**
python3 -m http.server 8080

**Чому саме він?**
Docker запускає команду з CMD / docker run безпосередньо як PID 1 — без жодного init-процесу між ними. Саме цей процес визначає час життя контейнера: поки живе PID 1 — живе контейнер.

---

## 3. Логи

```bash
curl http://localhost:8080
docker logs myapp
```

**Результат:**
192.168.65.1 - - [11/May/2026 09:46:25] "GET / HTTP/1.1" 200 -

**Звідки беруться логи?**
Docker перехоплює stdout і stderr процесу з PID 1 і передає їх через logging driver (json-file за замовчуванням). Команда docker logs читає саме звідти. Застосунок не знає де зберігаються логи — він просто пише у stdout.

---

## 4. Завершення контейнера

```bash
docker stop myapp
docker inspect myapp | grep -A2 "ExitCode"
docker inspect myapp | grep -E "StartedAt|FinishedAt"
```

**Результат:**
"ExitCode": 137
"StartedAt":  "2026-05-11T09:45:18Z"
"FinishedAt": "2026-05-11T09:46:43Z"

**Що відбулось:**
docker stop myapp
↓
SIGTERM → python3 (не обробляє сигнал)
↓
Docker чекає 10 секунд
↓
SIGKILL → процес вбито примусово
↓
ExitCode: 137 (128 + 9)

---

## Висновки

| Питання | Відповідь |
|---|---|
| Що визначає життя контейнера? | Час життя PID 1 |
| Чому контейнер завершився? | docker stop надіслав SIGTERM → python його проігнорував → SIGKILL |
| Звідки беруться логи? | Docker перехоплює stdout/stderr PID 1 |
| Що означає ExitCode 137? | Процес був вбитий через SIGKILL |

**Контейнер жив:** 1 хвилину 25 секунд
