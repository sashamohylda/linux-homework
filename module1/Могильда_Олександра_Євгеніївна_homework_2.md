# Домашнє завдання №2. Файлова система і права доступу

---

## Завдання 1. Ієрархія каталогів Linux (1 бал)

### Крок 1: Перехід до кореневого каталогу `/` і перегляд вмісту

```bash
cd /
ls -la
```

**Результат:**
```

total 10
drwxr-xr-x  22 root  wheel   704 Nov 22 15:49 .
drwxr-xr-x  22 root  wheel   704 Nov 22 15:49 ..
lrwxr-xr-x   1 root  admin    36 Nov 22 15:49 .VolumeIcon.icns -> System/Volumes/Data/.VolumeIcon.icns
----------   1 root  admin     0 Nov 22 15:49 .file
drwxr-xr-x   2 root  wheel    64 Nov 22 15:49 .nofollow
drwxr-xr-x   2 root  wheel    64 Nov 22 15:49 .resolve
drwxr-xr-x   2 root  wheel    64 Nov 22 15:49 .vol
drwxrwxr-x  61 root  admin  1952 Mar 14 17:50 Applications
drwxr-xr-x  68 root  wheel  2176 Mar  2 12:20 Library
drwxr-xr-x@ 10 root  wheel   320 Nov 22 15:49 System
drwxr-xr-x   5 root  admin   160 Dec 16 15:28 Users
drwxr-xr-x   4 root  wheel   128 Mar 15 14:14 Volumes
drwxr-xr-x@ 39 root  wheel  1248 Nov 22 15:49 bin
drwxr-xr-x   2 root  wheel    64 Oct 14  2023 cores
dr-xr-xr-x   4 root  wheel  5046 Mar  7 15:25 dev
lrwxr-xr-x@  1 root  wheel    11 Nov 22 15:49 etc -> private/etc
lrwxr-xr-x   1 root  wheel    25 Mar  7 15:25 home -> /System/Volumes/Data/home
drwxr-xr-x   4 root  wheel   128 Oct  5  2024 opt
drwxr-xr-x   6 root  wheel   192 Mar  7 15:25 private
drwxr-xr-x@ 76 root  wheel  2432 Nov 22 15:49 sbin
lrwxr-xr-x@  1 root  wheel    11 Nov 22 15:49 tmp -> private/tmp
drwxr-xr-x@ 11 root  wheel   352 Nov 22 15:49 usr
lrwxr-xr-x@  1 root  wheel    11 Nov 22 15:49 var -> private/var

### Крок 2: Перехід до `/etc` і перегляд вмісту

```bash
cd /etc
ls -la
```

**Результат (фрагмент):**
```
total 832
drwxr-xr-x  78 root  wheel    2496 Mar 11 04:39 .
drwxr-xr-x   6 root  wheel     192 Mar  7 15:25 ..
-rw-r--r--   1 root  wheel     515 Nov 22 15:49 afpovertcp.cfg
lrwxr-xr-x   1 root  wheel      15 Nov 22 15:49 aliases -> postfix/aliases
-rw-r-----   1 root  wheel   16384 Nov 22 15:49 aliases.db
drwxr-xr-x   9 root  wheel     288 Nov 22 15:49 apache2
drwxr-xr-x  16 root  wheel     512 Nov 22 15:49 asl
-rw-r--r--   1 root  wheel    1051 Nov 22 15:49 asl.conf
-rw-r--r--   1 root  wheel     149 Nov 22 15:49 auto_home
-rw-r--r--   1 root  wheel     195 Nov 22 15:49 auto_master
-rw-r--r--   1 root  wheel    1932 Nov 22 15:49 autofs.conf
-r--r--r--   1 root  wheel     265 Nov 22 15:49 bashrc
-rw-r--r--   1 root  wheel    9309 Nov 22 15:49 bashrc_Apple_Terminal
-rw-r--r--   1 root  wheel       0 Mar 11 04:39 com.apple.mis.rtadvd.conf
-rw-r--r--   1 root  wheel      82 Nov 22 15:49 com.apple.screensharing.agent.launchd
-rw-r--r--   1 root  wheel     189 Nov 22 15:49 csh.cshrc
-rw-r--r--   1 root  wheel     121 Nov 22 15:49 csh.login
-rw-r--r--   1 root  wheel      39 Nov 22 15:49 csh.logout
drwxr-xr-x  14 root  _lp       448 Dec 16 15:28 cups
-rw-r--r--   1 root  wheel       0 Nov 22 15:49 find.codes
-rw-r--r--   1 root  wheel     119 Nov 22 15:49 ftpusers
-rw-r--r--   1 root  wheel    5678 Nov 22 15:49 gettytab
-rw-r--r--   1 root  wheel    3960 Nov 22 15:49 group
-rw-r--r--   1 root  wheel     213 Nov 22 15:49 hosts
-rw-r--r--   1 root  wheel       0 Nov 22 15:49 hosts.equiv
-r--r--r--   1 root  wheel    1299 Nov 22 15:49 irbrc
-rw-r--r--   1 root  wheel       0 Nov 22 15:49 kern_loader.conf
-rw-------   1 root  wheel    1946 Dec 16 15:28 krb5.keytab
lrwxr-xr-x   1 root  wheel      37 Dec 16 15:28 localtime -> /var/db/timezone/zoneinfo/Europe/Kiev
-rw-r--r--   1 root  wheel     832 Nov 22 15:49 locate.rc
-rw-r--r--   1 root  wheel     106 Nov 22 15:49 mail.rc
-r--r--r--   1 root  wheel    2451 Nov 22 15:49 man.conf
-rw-r--r--   1 root  wheel      36 Nov 22 15:49 manpaths
drwxr-xr-x   2 root  wheel      64 Nov 22 15:49 manpaths.d
-rw-------   1 root  wheel   10004 Nov 22 15:49 master.passwd
-rw-r--r--   1 root  wheel      53 Nov 22 15:49 networks
-rw-r--r--   1 root  wheel    1318 Nov 22 15:49 newsyslog.conf
drwxr-xr-x   7 root  wheel     224 Nov 22 15:49 newsyslog.d
-rw-r--r--   1 root  wheel      43 Nov 22 15:49 nfs.conf
-rw-r--r--   1 root  wheel     557 Nov 22 15:49 notify.conf
-rw-r--r--@  1 root  wheel      27 Mar 25  2024 ntp.conf
-rw-r--r--   1 root  wheel      23 Nov 22 15:49 ntp_opendirectory.conf
drwxr-xr-x   8 root  wheel     256 Nov 22 15:49 openldap
drwxr-xr-x  27 root  wheel     864 Nov 22 15:49 pam.d
-rw-r--r--   1 root  wheel    9344 Nov 22 15:49 passwd
-rw-r--r--   1 root  wheel      75 Nov 22 15:49 paths
drwxr-xr-x   5 root  wheel     160 Dec 16 15:28 paths.d
drwxr-xr-x   3 root  wheel      96 Nov 22 15:49 pf.anchors
-rw-r--r--   1 root  wheel    1027 Nov 22 15:49 pf.conf
-rw-r--r--   1 root  wheel   28311 Nov 22 15:49 pf.os
drwxr-xr-x  23 root  wheel     736 Nov 22 15:49 postfix
drwxr-xr-x   2 root  wheel      64 Nov 22 15:49 ppp
-r--r--r--   1 root  wheel     189 Nov 22 15:49 profile
-rw-r--r--   1 root  wheel    6393 Nov 22 15:49 protocols
drwxr-xr-x   4 root  wheel     128 Nov 22 15:49 racoon
-rw-r--r--   1 root  wheel    1560 Nov 22 15:49 rc.common
-rw-r--r--   1 root  wheel    5264 Nov 22 15:49 rc.netboot
lrwxr-xr-x   1 root  wheel      22 Nov 22 15:49 resolv.conf -> ../var/run/resolv.conf
-rw-r--r--   1 root  wheel       0 Nov 22 15:49 rmtab
-rw-r--r--   1 root  wheel    1735 Nov 22 15:49 rpc
-rw-r--r--   1 root  wheel     891 Nov 22 15:49 rtadvd.conf
drwxr-xr-x   7 root  wheel     224 Nov 22 15:49 security
-rw-r--r--   1 root  wheel  678260 Nov 22 15:49 services
-rw-r--r--   1 root  wheel     189 Nov 22 15:49 shells
drwxr-xr-x   4 root  wheel     128 Nov 22 15:49 snmp
drwxr-xr-x   7 root  wheel     224 Dec 16 15:28 ssh
drwxr-xr-x   6 root  wheel     192 Nov 22 15:49 ssl
-r--r-----   1 root  wheel     257 Nov 22 15:49 sudo_lecture
-r--r-----   1 root  wheel    1709 Nov 22 15:49 sudoers
drwxr-xr-x   2 root  wheel      64 Nov 22 15:49 sudoers.d
-rw-r--r--   1 root  wheel      96 Nov 22 15:49 syslog.conf
-rw-r--r--   1 root  wheel    1316 Nov 22 15:49 ttys
drwxr-xr-x   5 root  wheel     160 Nov 22 15:49 uucp
drwxr-xr-x   6 root  wheel     192 Nov 22 15:49 wfs
-rw-r--r--   1 root  wheel       0 Nov 22 15:49 xtab
-r--r--r--   1 root  wheel     304 Nov 22 15:49 zprofile
-r--r--r--   1 root  wheel    3191 Nov 22 15:49 zshrc
-rw-r--r--   1 root  wheel    9335 Nov 22 15:49 zshrc_Apple_Terminal
```

---

### Крок 3: Перехід до `/home` і список користувачів

```bash
cd /home
ls -la
```

**Результат:**
```
total 2
dr-xr-xr-x   2 root  wheel    1 Mar  7 15:25 .
drwxr-xr-x@ 21 root  wheel  672 Feb 12 21:06 ..

Shared  alexandramogilda
```

> Каталог `/home` містить домашні директорії користувачів: `alexandramogilda`.

---

## Завдання 2. Файли, каталоги та посилання (2 бали)

### 1. Створення нового каталогу у домашньому каталозі

```bash
mkdir -p /home/claude/lab2
ls -la /home/claude/ | grep lab2
```

**Результат:**
```
drwxr-xr-x    2 alexandramogilda  staff        64 Mar 15 22:35 lab2
```

---

### 2. Створення файлу всередині каталогу

```bash
echo "Hello Linux" > ~/lab2/file.txt && cat ~/lab2/file.txt
```

**Результат:**
```
Hello Linux
```

---

### 3. Копіювання файлу у нове ім'я

```bash
cp ~/lab2/file.txt ~/lab2/file_copy.txt && ls -la ~/lab2/
```

**Результат:**
```
total 16
drwxr-xr-x    4 alexandramogilda  staff   128 Mar 15 22:37 .
drwxr-x---+ 142 alexandramogilda  staff  4544 Mar 15 22:35 ..
-rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:36 file.txt
-rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:37 file_copy.txt
```

---

### 4. Перейменування копії

```bash
mv ~/lab2/file_copy.txt ~/lab2/file_renamed.txt && ls -la ~/lab2/
```

**Результат:**
```
total 16
drwxr-xr-x    4 alexandramogilda  staff   128 Mar 15 22:38 .
drwxr-x---+ 142 alexandramogilda  staff  4544 Mar 15 22:35 ..
-rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:36 file.txt
-rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:37 file_renamed.txt
```

---

### 5. Створення жорсткого посилання

```bash
ln ~/lab2/file.txt ~/lab2/file_hardlink.txt && ls -lai ~/lab2/
```

**Результат:**
```
total 24
89713891 drwxr-xr-x    5 alexandramogilda  staff   160 Mar 15 22:38 .
263912 drwxr-x---+ 142 alexandramogilda  staff  4544 Mar 15 22:35 ..
89714153 -rw-r--r--    2 alexandramogilda  staff    12 Mar 15 22:36 file.txt
89714153 -rw-r--r--    2 alexandramogilda  staff    12 Mar 15 22:36 file_hardlink.txt
89714612 -rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:37 file_renamed.txt
```

> `file.txt` та `file_hardlink.txt` мають однаковий inode **89714153** — це підтверджує, що це жорстке посилання.

---

### 6. Створення символічного посилання

```bash
ln -s ~/lab2/file.txt ~/lab2/file_symlink.txt && ls -lai ~/lab2/
```

**Результат:**
```
total 24
89713891 drwxr-xr-x    6 alexandramogilda  staff   192 Mar 15 22:40 .
263912 drwxr-x---+ 142 alexandramogilda  staff  4544 Mar 15 22:35 ..
89714153 -rw-r--r--    2 alexandramogilda  staff    12 Mar 15 22:36 file.txt
89714153 -rw-r--r--    2 alexandramogilda  staff    12 Mar 15 22:36 file_hardlink.txt
89714612 -rw-r--r--    1 alexandramogilda  staff    12 Mar 15 22:37 file_renamed.txt
89715207 lrwxr-xr-x    1 alexandramogilda  staff    37 Mar 15 22:40 file_symlink.txt -> /Users/alexandramogilda/lab2/file.txt
```

> `file_symlink.txt` — символічне посилання (позначається `l` та стрілкою `->`) з власним inode ****.

---

### 7. Пошук файлу по імені

```bash
find ~/lab2 -name "file.txt"
```

**Результат:**
```
/Users/alexandramogilda/lab2/file.txt
```

---

## Завдання 3. Права доступу (1 бал)

### 1. Перегляд прав файлу

```bash
ls -la ~/lab2/file.txt
```

**Результат:**
```
-rw-r--r--  2 alexandramogilda  staff  12 Mar 15 22:36 /Users/alexandramogilda/lab2/file.txt
```

---

### 2. Надання файлу прав тільки на читання

```bash
chmod 444 ~/lab2/file.txt && ls -la ~/lab2/file.txt
```

**Результат:**
```
la ~/lab2/file.txt
-r--r--r--  2 alexandramogilda  staff  12 Mar 15 22:36 /Users/alexandramogilda/lab2/file.txt
```

> Права `444` означають: власник, група та інші — тільки читання (`-r--r--r--`).

---

### 3. Надання власнику права на запис

```bash
chmod 644 ~/lab2/file.txt && ls -la ~/lab2/file.txt
```

**Результат:**
```
la ~/lab2/file.txt
-r--r--r--  2 alexandramogilda  staff  12 Mar 15 22:36 /Users/alexandramogilda/lab2/file.txt
alexandramogilda@MacBook-Pro-Alexandra /home % chmod 644 ~/lab2/file.txt && ls -la ~/lab2/file.txt
-rw-r--r--  2 alexandramogilda  staff  12 Mar 15 22:36 /Users/alexandramogilda/lab2/file.txt
```

> Права `644`: власник — читання + запис (`rw-`), група та інші — тільки читання (`r--`).

---

### 4. Перегляд значення umask

```bash
umask
```

**Результат:**
```
022
```

---

### 5. Встановлення нового значення umask

```bash
umask 022 && umask
```

**Результат:**
```
022
```

> `umask 022` означає: нові файли створюються з правами `644`, нові каталоги — `755`.

---

### 4. Перегляд umask
```bash
umask
```
**Результат:**
```
022
```

### 5. Встановлення umask
```bash
umask 022 && umask
```
**Результат:**
```
022
```

---

## Завдання 4. Користувачі (1 бал)

### 1. Створення користувача trainee
```bash
sudo dscl . -create /Users/trainee
```

### 2. Додавання до групи admin (аналог sudo на macOS)
```bash
sudo dscl . -append /Groups/admin GroupMembership trainee
```

### 3. Перевірка існування користувача
```bash
dscl . -read /Users/trainee
```
**Результат:**
```
RecordName: trainee
RecordType: dsRecTypeStandard:Users
Password: ********
GeneratedUID: 546B6E8E-FD37-42E0-8E4B-BE525BCC401A
```
> На macOS використовується `dscl` замість `useradd`. Користувач `trainee` успішно створений та доданий до групи `admin` (аналог sudo).
