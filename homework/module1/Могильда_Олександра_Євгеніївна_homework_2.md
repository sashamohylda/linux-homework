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
total 3131
drwxr-xr-x  1 root root    4096 Mar 15 19:37 .
drwxr-xr-x  1 root root    4096 Mar 15 19:37 ..
-rwxr-xr-x  1 root root       0 Feb 18 20:03 .dockerenv
lrwxrwxrwx  1 root root       7 Apr 22  2024 bin -> usr/bin
drwxr-xr-x  2 root root       3 Apr 22  2024 boot
drwxr-xr-x  5 root root     340 Mar 15 19:37 dev
drwxr-xr-x  1 root root    4096 Feb 18 20:03 etc
drwxr-xr-x  4 root root      55 Feb 18 19:53 home
lrwxrwxrwx  1 root root       7 Apr 22  2024 lib -> usr/lib
lrwxrwxrwx  1 root root       9 Apr 22  2024 lib64 -> usr/lib64
drwxr-xr-x  2 root root       3 Feb 10 14:05 media
drwxr-xr-x  1 root root    4096 Mar 15 19:37 mnt
drwxr-xr-x  4 root root      60 Feb 18 19:59 opt
dr-xr-xr-x  9 root root       0 Mar 15 19:37 proc
drwx------  4 root root      72 Feb 18 19:57 root
drwxr-xr-x  9 root root     141 Feb 18 19:56 run
lrwxrwxrwx  1 root root       8 Apr 22  2024 sbin -> usr/sbin
drwxr-xr-x  2 root root       3 Feb 10 14:05 srv
drwxr-xr-x 12 root root       0 Mar 15 19:37 sys
drwxrwxrwt  5 root root     297 Feb 18 20:00 tmp
drwxr-xr-x 13 root root     225 Feb 18 19:57 usr
drwxr-xr-x 11 root root     172 Feb 10 14:12 var
```

---

### Крок 2: Перехід до `/etc` і перегляд вмісту

```bash
cd /etc
ls -la
```

**Результат (фрагмент):**
```
total 274
drwxr-xr-x 1 root root  4096 Feb 18 20:03 .
drwxr-xr-x 1 root root  4096 Mar 15 19:37 ..
-rw-r--r-- 1 root root  3444 Jul  5  2023 adduser.conf
drwxr-xr-x 8 root root   179 Feb 18 19:59 alternatives
-rw-r--r-- 1 root root  2319 Mar 31  2024 bash.bashrc
drwxr-xr-x 3 root root    35 Feb 18 19:54 ca-certificates
-rw-r--r-- 1 root root  6288 Feb 18 19:54 ca-certificates.conf
-rw-r--r-- 1 root root  2967 Apr 12  2024 debconf.conf
-rw-r--r-- 1 root root    11 Apr 22  2024 debian_version
drwxr-xr-x 4 root root   121 Feb 18 19:56 dpkg
-rw-r--r-- 1 root root   106 Feb 10 14:05 environment
-rw-r--r-- 1 root root  1853 Oct 17  2022 ethertypes
-rw-r--r-- 1 root root    37 Feb 10 14:05 fstab
...
```

---

### Крок 3: Перехід до `/home` і список користувачів

```bash
cd /home
ls -la
```

**Результат:**
```
total 6
drwxr-xr-x 4 root   root     55 Feb 18 19:53 .
drwxr-xr-x 1 root   root   4096 Mar 15 19:37 ..
drwxr-xr-x 7 root   root    157 Feb 18 19:57 claude
drwxr-x--- 2 ubuntu ubuntu   66 Feb 10 14:12 ubuntu
```

> Каталог `/home` містить домашні директорії користувачів: `claude` та `ubuntu`.

---

## Завдання 2. Файли, каталоги та посилання (2 бали)

### 1. Створення нового каталогу у домашньому каталозі

```bash
mkdir -p /home/claude/lab2
ls -la /home/claude/ | grep lab2
```

**Результат:**
```
drwxr-xr-x 2 root root 4096 Mar 15 19:38 lab2
```

---

### 2. Створення файлу всередині каталогу

```bash
echo "Це тестовий файл для домашнього завдання №2" > /home/claude/lab2/file.txt
cat /home/claude/lab2/file.txt
```

**Результат:**
```
Це тестовий файл для домашнього завдання №2
```

---

### 3. Копіювання файлу у нове ім'я

```bash
cp /home/claude/lab2/file.txt /home/claude/lab2/file_copy.txt
ls -la /home/claude/lab2/
```

**Результат:**
```
total 9
drwxr-xr-x 2 root root 4096 Mar 15 19:38 .
drwxr-xr-x 1 root root 4096 Mar 15 19:38 ..
-rw-r--r-- 1 root root   81 Mar 15 19:38 file.txt
-rw-r--r-- 1 root root   81 Mar 15 19:38 file_copy.txt
```

---

### 4. Перейменування копії

```bash
mv /home/claude/lab2/file_copy.txt /home/claude/lab2/file_renamed.txt
ls -la /home/claude/lab2/
```

**Результат:**
```
total 9
drwxr-xr-x 2 root root 4096 Mar 15 19:38 .
drwxr-xr-x 1 root root 4096 Mar 15 19:38 ..
-rw-r--r-- 1 root root   81 Mar 15 19:38 file.txt
-rw-r--r-- 1 root root   81 Mar 15 19:38 file_renamed.txt
```

---

### 5. Створення жорсткого посилання

```bash
ln /home/claude/lab2/file.txt /home/claude/lab2/file_hardlink.txt
ls -lai /home/claude/lab2/
```

**Результат:**
```
217 drwxr-xr-x 2 root root 4096 Mar 15 19:38 .
 26 drwxr-xr-x 1 root root 4096 Mar 15 19:38 ..
224 -rw-r--r-- 2 root root   81 Mar 15 19:38 file.txt
224 -rw-r--r-- 2 root root   81 Mar 15 19:38 file_hardlink.txt
230 -rw-r--r-- 1 root root   81 Mar 15 19:38 file_renamed.txt
```

> `file.txt` та `file_hardlink.txt` мають однаковий inode **224** — це підтверджує, що це жорстке посилання.

---

### 6. Створення символічного посилання

```bash
ln -s /home/claude/lab2/file.txt /home/claude/lab2/file_symlink.txt
ls -lai /home/claude/lab2/
```

**Результат:**
```
217 drwxr-xr-x 2 root root 4096 Mar 15 19:38 .
 26 drwxr-xr-x 1 root root 4096 Mar 15 19:38 ..
224 -rw-r--r-- 2 root root   81 Mar 15 19:38 file.txt
224 -rw-r--r-- 2 root root   81 Mar 15 19:38 file_hardlink.txt
230 -rw-r--r-- 1 root root   81 Mar 15 19:38 file_renamed.txt
233 lrwxrwxrwx 1 root root   26 Mar 15 19:38 file_symlink.txt -> /home/claude/lab2/file.txt
```

> `file_symlink.txt` — символічне посилання (позначається `l` та стрілкою `->`) з власним inode **233**.

---

### 7. Пошук файлу по імені

```bash
find /home/claude/lab2 -name "file.txt"
```

**Результат:**
```
/home/claude/lab2/file.txt
```

---

## Завдання 3. Права доступу (1 бал)

### 1. Перегляд прав файлу

```bash
ls -la /home/claude/lab2/file.txt
stat /home/claude/lab2/file.txt
```

**Результат:**
```
-rw-r--r-- 2 root root 81 Mar 15 19:38 /home/claude/lab2/file.txt
Access: (0644/-rw-r--r--)  Uid: (0/root)   Gid: (0/root)
```

---

### 2. Надання файлу прав тільки на читання

```bash
chmod 444 /home/claude/lab2/file.txt
ls -la /home/claude/lab2/file.txt
```

**Результат:**
```
-r--r--r-- 2 root root 81 Mar 15 19:38 /home/claude/lab2/file.txt
```

> Права `444` означають: власник, група та інші — тільки читання (`r--r--r--`).

---

### 3. Надання власнику права на запис

```bash
chmod 644 /home/claude/lab2/file.txt
ls -la /home/claude/lab2/file.txt
```

**Результат:**
```
-rw-r--r-- 2 root root 81 Mar 15 19:38 /home/claude/lab2/file.txt
```

> Права `644`: власник — читання + запис (`rw-`), група та інші — тільки читання (`r--`).

---

### 4. Перегляд значення umask

```bash
umask
```

**Результат:**
```
0022
```

---

### 5. Встановлення нового значення umask

```bash
umask 022
umask
```

**Результат:**
```
0022
```

> `umask 022` означає: нові файли створюються з правами `644`, нові каталоги — `755`.

---

## Завдання 4. Користувачі (1 бал)

### 1. Створення нового користувача `trainee`

```bash
useradd -m -s /bin/bash trainee
```

> Прапорці: `-m` — створити домашній каталог, `-s /bin/bash` — встановити оболонку bash.

---

### 2. Додавання користувача до sudo-групи

```bash
usermod -aG sudo trainee
```

> `-aG` — додати до групи без видалення з інших груп.

---

### 3. Перевірка існування користувача

```bash
grep "trainee" /etc/passwd
```

**Результат:**
```
trainee:x:1001:1001::/home/trainee:/bin/bash
```

```bash
id trainee
```

**Результат:**
```
uid=1001(trainee) gid=1001(trainee) groups=1001(trainee),27(sudo)
```

```bash
groups trainee
```

**Результат:**
```
trainee : trainee sudo
```

> Користувач `trainee` успішно створений та доданий до групи `sudo`.
