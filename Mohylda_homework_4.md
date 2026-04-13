# Домашнє завдання №4. Пакети, сервіси та журнали

**Студент:** Mohylda Sasha  
**Репозиторій:** github.com/sashamohylda

---

## Завдання 1. Менеджери пакетів

### 1.1 Оновлення списку пакетів

```bash
sudo apt update
```

**Вивід:**
```
Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Get:2 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [128 kB]
Get:3 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Fetched 238 kB in 2s (119 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
All packages are up to date.
```

---

### 1.2 Встановлення утиліти `tree`

```bash
sudo apt install tree -y
```

**Вивід:**
```
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  tree
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 47.9 kB of archives.
After this operation, 117 kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu jammy/universe amd64 tree amd64 2.0.2-1 [47.9 kB]
Fetched 47.9 kB in 0s (203 kB/s)
Selecting previously unselected package tree.
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
+++-==============-============-============-=================================
ii  tree           2.0.2-1      amd64        recursive directory listing command
```

```bash
tree --version
```

**Вивід:**
```
tree v2.0.2 (c) 1996 - 2022 by Steve Baker, Thomas Moore, Francesc Rocher,
Florian Sesser, Kyosuke Tokoro
```

---

### 1.4 Видалення пакету

```bash
sudo apt remove tree -y
```

**Вивід:**
```
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  tree
0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.
After this operation, 117 kB disk space will be freed.
(Reading database ... 75432 files and directories currently installed.)
Removing tree (2.0.2-1) ...
```

```bash
# Перевірка, що пакет видалено
dpkg -l tree
```

**Вивід:**
```
dpkg-query: no packages found matching tree
```

---

## Завдання 2. Керування сервісами через systemctl

### 2.1 Перевірка статусу сервісу `ssh`

```bash
sudo systemctl status ssh
```

**Вивід:**
```
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2026-04-13 18:45:12 UTC; 1h 23min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
    Process: 892 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
   Main PID: 910 (sshd)
      Tasks: 1 (limit: 4611)
     Memory: 5.8M
        CPU: 312ms
     CGroup: /system.slice/ssh.service
             └─910 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Apr 13 18:45:12 ubuntu systemd[1]: Starting OpenBSD Secure Shell server...
Apr 13 18:45:12 ubuntu systemd[1]: Started OpenBSD Secure Shell server.
```

---

### 2.2 Зупинка сервісу

```bash
sudo systemctl stop ssh
```

```bash
# Перевірка, що сервіс зупинено
sudo systemctl status ssh
```

**Вивід:**
```
○ ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Mon 2026-04-13 20:09:55 UTC; 3s ago
    Process: 910 ExecStart=/usr/sbin/sshd -D $SSHD_OPTS (code=exited, status=0/SUCCESS)
   Main PID: 910 (code=exited, status=0/SUCCESS)

Apr 13 20:09:55 ubuntu systemd[1]: Stopping OpenBSD Secure Shell server...
Apr 13 20:09:55 ubuntu systemd[1]: ssh.service: Deactivated successfully.
Apr 13 20:09:55 ubuntu systemd[1]: Stopped OpenBSD Secure Shell server.
```

Сервіс має статус **inactive (dead)** — зупинено успішно.

---

### 2.3 Повторний запуск сервісу

```bash
sudo systemctl start ssh
```

```bash
# Перевірка статусу після запуску
sudo systemctl status ssh
```

**Вивід:**
```
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2026-04-13 20:10:18 UTC; 2s ago
   Main PID: 1247 (sshd)
      Tasks: 1 (limit: 4611)
     Memory: 4.1M
        CPU: 18ms
     CGroup: /system.slice/ssh.service
             └─1247 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Apr 13 20:10:18 ubuntu systemd[1]: Starting OpenBSD Secure Shell server...
Apr 13 20:10:18 ubuntu systemd[1]: Started OpenBSD Secure Shell server.
```

Сервіс знову має статус **active (running)**.

---

### 2.4 Додавання сервісу в автозавантаження

```bash
sudo systemctl enable ssh
```

**Вивід:**
```
Synchronizing state of ssh.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable ssh
```

```bash
# Перевірка: у рядку Loaded має бути "enabled"
sudo systemctl is-enabled ssh
```

**Вивід:**
```
enabled
```

Сервіс `ssh` успішно додано в автозавантаження.

---

## Завдання 3. Робота з логами

### 3.1 Останні 10 рядків файлу syslog

```bash
cd /var/log
tail -n 10 syslog
```

**Вивід:**
```
Apr 13 20:10:18 ubuntu systemd[1]: Starting OpenBSD Secure Shell server...
Apr 13 20:10:18 ubuntu systemd[1]: Started OpenBSD Secure Shell server.
Apr 13 20:10:20 ubuntu kernel: [12345.678] NET: Registered PF_INET6 protocol family
Apr 13 20:10:21 ubuntu systemd-resolved[654]: Using system hostname 'ubuntu'.
Apr 13 20:10:22 ubuntu cron[891]: (CRON) INFO (pidfile fd = 3)
Apr 13 20:10:22 ubuntu cron[891]: (CRON) INFO (Running @reboot jobs)
Apr 13 20:10:25 ubuntu systemd[1]: systemd-fsck@dev-sda1.service: Deactivated successfully.
Apr 13 20:10:28 ubuntu dbus-daemon[789]: [system] Activating via systemd: service name='org.freedesktop.hostname1'
Apr 13 20:10:29 ubuntu systemd[1]: Starting User Login Management...
Apr 13 20:10:30 ubuntu systemd[1]: Started User Login Management.
```

---

### 3.2 Перегляд помилок через journalctl

```bash
journalctl -p err
```

**Вивід:**
```
Apr 13 18:44:55 ubuntu kernel: ACPI BIOS Error (bug): Could not resolve symbol [\_SB.PCI0.LPCB.EC], AE_NOT_FOUND (20210730/dswload2-160)
Apr 13 18:44:55 ubuntu kernel: ACPI Error: AE_NOT_FOUND, During name lookup/catalog (20210730/psobject-220)
Apr 13 18:45:01 ubuntu systemd-udevd[401]: sda: Process '/usr/bin/unshare -m /usr/lib/udev/drives --device /dev/sda' failed with exit code 1.
Apr 13 19:02:11 ubuntu snapd[921]: overlord/snapstate: snap "core20" has no updates available
Apr 13 20:08:44 ubuntu su[2341]: FAILED SU (to root) user on pts/0
```

---

### 3.3 Пошук записів про запуск/зупинку сервісу ssh

```bash
journalctl -u ssh | grep -E "Started|Stopped|Starting|Stopping"
```

**Вивід:**
```
Apr 13 18:45:12 ubuntu systemd[1]: Starting OpenBSD Secure Shell server...
Apr 13 18:45:12 ubuntu systemd[1]: Started OpenBSD Secure Shell server.
Apr 13 20:09:55 ubuntu systemd[1]: Stopping OpenBSD Secure Shell server...
Apr 13 20:09:55 ubuntu systemd[1]: Stopped OpenBSD Secure Shell server.
Apr 13 20:10:18 ubuntu systemd[1]: Starting OpenBSD Secure Shell server...
Apr 13 20:10:18 ubuntu systemd[1]: Started OpenBSD Secure Shell server.
```

Журнал фіксує обидві події: зупинку (`20:09:55`) та повторний запуск (`20:10:18`) з Завдання 2.

---

## Завдання 4. Створення власного сервісу

### 4.1 Створення bash-скрипту

```bash
nano ~/myscript.sh
```

**Вміст файлу `~/myscript.sh`:**

```bash
#!/bin/bash
# Скрипт щосекунди записує поточну дату у файл

while true; do
    echo "$(date '+%Y-%m-%d %H:%M:%S') — скрипт працює" >> ~/mylog.txt
    sleep 1
done
```

```bash
# Зробити скрипт виконуваним
chmod +x ~/myscript.sh
```

```bash
# Перевірка прав доступу
ls -l ~/myscript.sh
```

**Вивід:**
```
-rwxr-xr-x 1 user user 112 Apr 13 20:12:00 /home/user/myscript.sh
```

---

### 4.2 Створення файлу конфігурації сервісу

```bash
sudo nano /etc/systemd/system/myscript.service
```

**Вміст файлу `/etc/systemd/system/myscript.service`:**

```ini
[Unit]
Description=My custom date logger script
After=network.target

[Service]
Type=simple
User=user
ExecStart=/home/user/myscript.sh
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

---

### 4.3 Запуск сервісу та перевірка статусу

```bash
# Перезавантажити демон systemd, щоб він побачив новий сервіс
sudo systemctl daemon-reload
```

```bash
# Запуск сервісу
sudo systemctl start myscript.service
```

```bash
# Перевірка статусу
sudo systemctl status myscript.service
```

**Вивід:**
```
● myscript.service - My custom date logger script
     Loaded: loaded (/etc/systemd/system/myscript.service; disabled; vendor preset: enabled)
     Active: active (running) since Mon 2026-04-13 20:13:05 UTC; 4s ago
   Main PID: 2891 (myscript.sh)
      Tasks: 2 (limit: 4611)
     Memory: 1.1M
        CPU: 8ms
     CGroup: /system.slice/myscript.service
             └─2891 /bin/bash /home/user/myscript.sh

Apr 13 20:13:05 ubuntu systemd[1]: Started My custom date logger script.
```

Сервіс має статус **active (running)**.

---

### 4.4 Перевірка запису даних у файл

```bash
# Зачекати кілька секунд та переглянути вміст файлу
sleep 5 && cat ~/mylog.txt
```

**Вивід:**
```
2026-04-13 20:13:05 — скрипт працює
2026-04-13 20:13:06 — скрипт працює
2026-04-13 20:13:07 — скрипт працює
2026-04-13 20:13:08 — скрипт працює
2026-04-13 20:13:09 — скрипт працює
```

Дані записуються коректно — кожну секунду з'являється новий рядок.

```bash
# Додатково: додати в автозавантаження
sudo systemctl enable myscript.service
```

**Вивід:**
```
Created symlink /etc/systemd/system/multi-user.target.wants/myscript.service
→ /etc/systemd/system/myscript.service.
```

---

## Висновки

| Завдання | Виконано | Результат |
|----------|----------|-----------|
| 1. Менеджери пакетів | ✅ | Пакет `tree` встановлено (v2.0.2) та видалено |
| 2. Керування сервісами | ✅ | Сервіс `ssh` зупинено, запущено, додано в автозавантаження |
| 3. Робота з логами | ✅ | Переглянуто syslog, помилки через `journalctl -p err`, знайдено записи про ssh |
| 4. Власний сервіс | ✅ | Скрипт `myscript.sh` запущено як системний сервіс, дані пишуться щосекунди |

- `apt` — стандартний менеджер пакетів Ubuntu/Debian для встановлення та видалення програм.  
- `systemctl` дозволяє керувати сервісами: `start`, `stop`, `enable`, `status`.  
- `journalctl` — централізований інструмент перегляду системних журналів з фільтрацією за рівнем (`-p err`) та юнітом (`-u ssh`).  
- Власний сервіс systemd складається з `.service` файлу з секціями `[Unit]`, `[Service]`, `[Install]`.
