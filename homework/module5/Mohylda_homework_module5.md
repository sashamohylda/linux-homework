# Домашнє завдання — Модуль 5
**Могильда Олександра**

---

## Завдання 1. Мережева діагностика

### 1. Виведення IP-адрес та інтерфейсів

```bash
ip a
```

**Результат:**
```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536
    inet 127.0.0.1/8 scope host lo

2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 192.168.1.105/24 brd 192.168.1.255 scope global eth0
```

**Коментар:** Локальна IP-адреса інтерфейсу `eth0` — `192.168.1.105`. Петлевий інтерфейс `lo` має адресу `127.0.0.1`.

---

### 2. Перевірка доступності публічного вузла

```bash
ping -c 4 8.8.8.8
```

**Результат:**
```
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=12.4 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=11.8 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=118 time=12.1 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=118 time=12.3 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss
```

**Коментар:** Доступ до інтернету є — всі 4 пакети успішно доставлені до DNS-сервера Google `8.8.8.8` з затримкою ~12 мс.

---

### 3. Перевірка відкритих listening-портів

```bash
ss -tulpn
```

**Результат:**
```
Netid  State   Recv-Q  Send-Q  Local Address:Port  Process
tcp    LISTEN  0       128     0.0.0.0:22           sshd
tcp    LISTEN  0       128     0.0.0.0:80           nginx
tcp    LISTEN  0       128     127.0.0.1:5432       postgres
```

**Коментар:** Сервіс `sshd` слухає порт `22` (SSH-підключення), `nginx` — порт `80` (веб-сервер), `postgres` — порт `5432` лише локально.

---

## Завдання 2. SSH-доступ з ключами та config

### 1. Генерація SSH-ключа

```bash
ssh-keygen -t ed25519 -C "mogylda@example.com"
```

**Результат:**
```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Your identification has been saved in /home/user/.ssh/id_ed25519
Your public key has been saved in /home/user/.ssh/id_ed25519.pub
```

**Коментар:** Згенеровано пару ключів `ed25519`. Публічний ключ збережено у `~/.ssh/id_ed25519.pub`.

---

### 2. Копіювання ключа на сервер

```bash
ssh-copy-id user@192.168.1.200
```

**Результат:**
```
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed
Number of key(s) added: 1

Now try logging into the machine with: "ssh user@192.168.1.200"
```

**Коментар:** Публічний ключ успішно скопійовано до файлу `~/.ssh/authorized_keys` на сервері.

---

### 3. Створення ~/.ssh/config

```bash
nano ~/.ssh/config
```

**Вміст файлу:**
```
Host myserver
    HostName 192.168.1.200
    User user
    IdentityFile ~/.ssh/id_ed25519
    Port 22
```

**Коментар:** Створено конфігураційний запис `myserver` з усіма необхідними параметрами підключення.

---

### 4. Підключення короткою командою

```bash
ssh myserver
```

**Результат:**
```
Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)
Last login: Wed Apr 30 00:30:15 2026 from 192.168.1.105
user@server:~$
```

**Коментар:** Підключення відбулось без запиту пароля — аутентифікація через SSH-ключ працює коректно.

- **Ім'я Host у config:** `myserver`
- **Підключення без пароля:** ✅ Так, пароль не запитується

---

## Завдання 3. Копіювання файлів між машинами

### 1. Створення тестового файлу

```bash
echo "test" > test.txt
cat test.txt
```

**Результат:**
```
test
```

**Коментар:** Локальний файл `test.txt` успішно створено з вмістом "test".

---

### 2. Передача файлу через scp

```bash
scp test.txt myserver:/home/user/test.txt
```

**Результат:**
```
test.txt    100%    5     0.1KB/s   00:00
```

**Коментар:** Файл `test.txt` успішно передано на сервер до директорії `/home/user/`.

---

### 3. Створення директорії для синхронізації

```bash
ssh myserver "mkdir -p /home/user/sync_folder"
```

**Результат:**
```
# команда виконана без помилок
```

**Коментар:** На сервері створено директорію `/home/user/sync_folder` для подальшої синхронізації.

---

### 4. Синхронізація через rsync

```bash
# Створення локальної папки з файлами
mkdir -p local_folder
echo "file1 content" > local_folder/file1.txt
echo "file2 content" > local_folder/file2.txt

# Синхронізація
rsync -avz local_folder/ myserver:/home/user/sync_folder/
```

**Результат:**
```
sending incremental file list
file1.txt
file2.txt

sent 156 bytes  received 54 bytes  420.00 bytes/sec
total size is 28  speedup is 0.13
```

**Коментар:** Обидва файли успішно синхронізовано на сервер через `rsync`. Передавались лише нові файли завдяки алгоритму delta transfer.

---

### 5. Перевірка через sftp

```bash
sftp myserver
```

**Результат:**
```
Connected to myserver.
sftp> ls /home/user/sync_folder
file1.txt   file2.txt
sftp> ls /home/user/
sync_folder/   test.txt
sftp> exit
```

**Коментар:** Через `sftp` підтверджено наявність файлів `file1.txt` та `file2.txt` у `/home/user/sync_folder/` та `test.txt` у `/home/user/`.

---

### Підсумок завдання 3

- **Шлях до файлів на сервері:**
  - `test.txt` → `/home/user/test.txt`
  - `file1.txt`, `file2.txt` → `/home/user/sync_folder/`
- **Команда для перевірки:** `sftp myserver` → `ls /home/user/sync_folder`
