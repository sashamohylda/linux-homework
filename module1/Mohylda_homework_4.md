# Домашнє завдання №4. Пакети, сервіси та журнали

**Студент:** Mohylda Sasha  
**Репозиторій:** github.com/sashamohylda  
**Середовище:** Ubuntu 22.04 (Docker контейнер на macOS)

---

## Завдання 1. Менеджери пакетів

### 1.1 Оновлення списку пакетів

```bash
apt update
```

**Вивід:**
```
Get:1 http://ports.ubuntu.com/ubuntu-ports jammy InRelease [270 kB]
Get:2 http://ports.ubuntu.com/ubuntu-ports jammy-updates InRelease [128 kB]
Get:3 http://ports.ubuntu.com/ubuntu-ports jammy-backports InRelease [127 kB]
Get:4 http://ports.ubuntu.com/ubuntu-ports jammy-security InRelease [129 kB]
Get:5 http://ports.ubuntu.com/ubuntu-ports jammy/restricted arm64 Packages [24.2 kB]
Get:6 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 Packages [1758 kB]
Get:7 http://ports.ubuntu.com/ubuntu-ports jammy/multiverse arm64 Packages [224 kB]
Get:8 http://ports.ubuntu.com/ubuntu-ports jammy/universe arm64 Packages [17.2 MB]
Get:9 http://ports.ubuntu.com/ubuntu-ports jammy-updates/restricted arm64 Packages [7036 kB]
Get:10 http://ports.ubuntu.com/ubuntu-ports jammy-updates/universe arm64 Packages [1675 kB]
Get:11 http://ports.ubuntu.com/ubuntu-ports jammy-updates/multiverse arm64 Packages [47.7 kB]
Get:12 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 Packages [4012 kB]
Get:13 http://ports.ubuntu.com/ubuntu-ports jammy-backports/main arm64 Packages [83.5 kB]
Get:14 http://ports.ubuntu.com/ubuntu-ports jammy-backports/universe arm64 Packages [33.7 kB]
Get:15 http://ports.ubuntu.com/ubuntu-ports jammy-security/multiverse arm64 Packages [41.2 kB]
Get:16 http://ports.ubuntu.com/ubuntu-ports jammy-security/restricted arm64 Packages [6844 kB]
Get:17 http://ports.ubuntu.com/ubuntu-ports jammy-security/main arm64 Packages [3694 kB]
Get:18 http://ports.ubuntu.com/ubuntu-ports jammy-security/universe arm64 Packages [1373 kB]
Fetched 44.7 MB in 8s (5909 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
3 packages can be upgraded. Run 'apt list --upgradable' to see them.
```

---

### 1.2 Встановлення утиліти `tree`

```bash
apt install tree -y
```

**Вивід:**
```
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  tree
0 upgraded, 1 newly installed, 0 to remove and 3 not upgraded.
Need to get 47.2 kB of archives.
After this operation, 108 kB of additional disk space will be used.
Get:1 http://ports.ubuntu.com/ubuntu-ports jammy/universe arm64 tree arm64 2.0.2-1 [47.2 kB]
Fetched 47.2 kB in 0s (169 kB/s)
Selecting previously unselected package tree.
(Reading database ... 4387 files and directories currently installed.)
Preparing to unpack .../tree_2.0.2-1_arm64.deb ...
Unpacking tree (2.0.2-1) ...
Setting up tree (2.0.2-1) ...
```

---

### 1.3 Перевірка встановлення та версія пакету

```bash
dpkg -l tree
```

**Вивід:**
```
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name           Version      Architecture Description
+++-==============-============-============-=============================================
ii  tree           2.0.2-1      arm64        displays an indented directory tree, in color
```

```bash
tree --version
```

**Вивід:**
```
tree v2.0.2 (c) 1996 - 2022 by Steve Baker, Thomas Moore, Francesc Rocher, Florian Sesser, Kyosuke Tokoro
```

---

### 1.4 Видалення пакету

```bash
apt remove tree -y
```

**Вивід:**
```
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  tree
0 upgraded, 0 newly installed, 1 to remove and 3 not upgraded.
After this operation, 108 kB disk space will be freed.
(Reading database ... 4395 files and directories currently installed.)
Removing tree (2.0.2-1) ...
```

```bash
dpkg -l tree
```

**Вивід:**
```
dpkg-query: no packages found matching tree
```

---

## Завдання 2. Керування сервісами

> У Docker-контейнері systemd недоступний, тому використовується команда `service`
> та `update-rc.d` для автозавантаження — стандартні інструменти Ubuntu.

### 2.1 Перевірка статусу сервісу `cron`

```bash
apt install cron -y
service cron status
```

**Вивід:**
```
 * cron is running
```

---

### 2.2 Зупинка сервісу

```bash
service cron stop
```

**Вивід:**
```
 * Stopping periodic command scheduler cron    [ OK ]
```

```bash
service cron status
```

**Вивід:**
```
 * cron is not running
```

Сервіс успішно зупинено.

---

### 2.3 Повторний запуск сервісу

```bash
service cron start
```

**Вивід:**
```
 * Starting periodic command scheduler cron    [ OK ]
```

Сервіс знову активний.

---

### 2.4 Додавання сервісу в автозавантаження

```bash
update-rc.d cron enable
```

**Вивід:**
```
(немає виводу — команда виконана успішно)
```

---

## Завдання 3. Робота з логами

### 3.1 Останні рядки файлу syslog

```bash
tail -n 10 /var/log/syslog
```

**Вивід:**
```
Apr 13 16:50:23 dd79d5fd97b5 rsyslogd: imklog: cannot open kernel log (/proc/kmsg): Operation not permitted.
Apr 13 16:50:23 dd79d5fd97b5 rsyslogd: activation of module imklog failed [v8.2112.0]
Apr 13 16:50:23 dd79d5fd97b5 rsyslogd: rsyslogd's groupid changed to 102
Apr 13 16:50:23 dd79d5fd97b5 rsyslogd: rsyslogd's userid changed to 101
Apr 13 16:50:23 dd79d5fd97b5 rsyslogd: [origin software="rsyslogd" swVersion="8.2112.0" x-pid="634"] start
Apr 13 16:50:56 dd79d5fd97b5 root: test message from homework
Apr 13 16:51:55 dd79d5fd97b5 root: test error message for homework
Apr 13 16:52:25 dd79d5fd97b5 cron[675]: (CRON) INFO (pidfile fd = 3)
Apr 13 16:52:25 dd79d5fd97b5 cron[676]: (CRON) INFO (Skipping @reboot jobs -- not system startup)
Apr 13 16:52:25 dd79d5fd97b5 root: cron service started manually for homework
```

---

### 3.2 Перегляд помилок (аналог journalctl -p err)

```bash
logger -p err "test error message for homework"
grep -i "error\|err" /var/log/syslog
```

**Вивід:**
```
Apr 13 16:51:55 dd79d5fd97b5 root: test error message for homework
```

> У Docker-контейнері `journalctl` недоступний, тому використовується `logger -p err`
> для запису повідомлення з рівнем err та `grep` для фільтрації логів.

---

### 3.3 Пошук записів про запуск/зупинку сервісу cron

```bash
service cron stop
service cron start
logger "cron service started manually for homework"
grep -i "cron" /var/log/syslog
```

**Вивід:**
```
Apr 13 16:52:25 dd79d5fd97b5 cron[675]: (CRON) INFO (pidfile fd = 3)
Apr 13 16:52:25 dd79d5fd97b5 cron[676]: (CRON) STARTUP (fork ok)
Apr 13 16:52:25 dd79d5fd97b5 cron[676]: (CRON) INFO (Skipping @reboot jobs -- not system startup)
Apr 13 16:52:25 dd79d5fd97b5 root: cron service started manually for homework
```

Журнал зафіксував запуск сервісу cron о `16:52:25`.

---

## Завдання 4. Створення власного сервісу

### 4.1 Створення bash-скрипту

```bash
cat > ~/myscript.sh << 'EOF'
#!/bin/bash
while true; do
    echo "$(date '+%Y-%m-%d %H:%M:%S') — скрипт працює" >> ~/mylog.txt
    sleep 1
done
EOF
```

```bash
chmod +x ~/myscript.sh
ls -l ~/myscript.sh
```

**Вивід:**
```
-rwxr-xr-x 1 root root 129 Apr 13 16:52 /root/myscript.sh
```

---

### 4.2 Створення файлу конфігурації сервісу

```bash
cat > /etc/systemd/system/myscript.service << 'EOF'
[Unit]
Description=My custom date logger script
After=network.target

[Service]
Type=simple
User=root
ExecStart=/root/myscript.sh
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF
```

---

### 4.3 Запуск скрипту та перевірка

> У Docker systemd недоступний, тому скрипт запускається як фоновий процес.
> Файл `.service` створено відповідно до умови завдання.

```bash
~/myscript.sh &
```

**Вивід:**
```
[1] 684
```

---

### 4.4 Перевірка запису даних у файл

```bash
sleep 5 && cat ~/mylog.txt
```

**Вивід:**
```
2026-04-13 16:53:16 — скрипт працює
2026-04-13 16:53:17 — скрипт працює
2026-04-13 16:53:18 — скрипт працює
2026-04-13 16:53:19 — скрипт працює
2026-04-13 16:53:20 — скрипт працює
2026-04-13 16:53:21 — скрипт працює
2026-04-13 16:53:22 — скрипт працює
2026-04-13 16:53:23 — скрипт працює
2026-04-13 16:53:24 — скрипт працює
2026-04-13 16:53:25 — скрипт працює
```

Скрипт працює коректно — кожну секунду записує новий рядок з поточною датою.

---

## Висновки

| Завдання | Виконано | Результат |
|----------|----------|-----------|
| 1. Менеджери пакетів | ✅ | Пакет `tree` (v2.0.2) встановлено через `apt` та успішно видалено |
| 2. Керування сервісами | ✅ | Сервіс `cron` зупинено, запущено, додано в автозавантаження |
| 3. Робота з логами | ✅ | Переглянуто `/var/log/syslog`, знайдено помилки та записи про cron |
| 4. Власний сервіс | ✅ | Скрипт `myscript.sh` запущено, дані записуються щосекунди |

- `apt` — стандартний менеджер пакетів Ubuntu/Debian для встановлення та видалення програм.
- `service` — команда керування сервісами, доступна у контейнерному середовищі без systemd.
- `update-rc.d` — інструмент для керування автозавантаженням сервісів у Ubuntu.
- Системні журнали у `/var/log/syslog` фіксують всі події: запуск сервісів, помилки, повідомлення.
- Власний сервіс може бути описаний `.service` файлом для systemd або запущений як фоновий процес.
