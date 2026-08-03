# ✦ Software Cleanup Guide

Sometimes uninstalling a program isn't enough. Many applications leave behind files, caches, registry entries, services, and plugins which can interfere with future installations.

This guide walks you through performing a **complete uninstall** before reinstalling software or plugins.

This is recommended if:

- Installers fail or crash.
- Plugins don't appear inside your host application.
- Older software still behaves as if it's installed.
- Licensing issues persist after reinstalling.
- You're downgrading/upgrading to another version.
- Installation support specifically asks for a clean installation.

---
## Table Of Contents

### [✧ **General**](#macos)
- [Important](removal#important)
- [Common Software Locations](removal#csl)
<br><br>

### [✧ **Windows**](#windows)
- [Before you start](removal#bysw)
- [Official Uninstaller](removal#ounw)
- [Plugin Folders](removal#plfw)
- [Remove Remaining Program Files](removal#rpfw)
- [Remove AppData & Caches](removal#adcw)
- [Registry Cleanup](removal#rgcw)
<br><br>

### [✧ **MacOS**](#macos)
- [Before you start](removal#bysm)
- [Official Uninstaller](removal#ounm)
- [Plugin Folders](removal#plfm)
- [Remove Remaining Program Files](removal#rpfm)
- [Clear Preferences & Caches](removal#pncm)

---
## ✧ Important <span id="important"></span>

Do **not** delete folders unless you're certain they belong to the software you're uninstalling.

If you're planning to reinstall immediately afterwards, restart your computer before running the installer again.

---
## ✧ Common Software Locations <span id="csl"></span>

These are some of the most common folders used by popular creative software.

## Adobe

### Windows

`C:\Program Files\Adobe`

`C:\ProgramData\Adobe`

`%AppData%\Adobe`

`%LocalAppData%\Adobe`
<br><br>
### MacOS

`/Applications/Adobe*`

`/Library/Application Support/Adobe`

`~/Library/Application Support/Adobe`
<br><br>

## Maxon

### Windows

`C:\Program Files\Maxon`

`C:\ProgramData\Maxon`

`%AppData%\Maxon`

`%LocalAppData%\Maxon`
<br><br>
### MacOS

`/Applications/Maxon*`

`/Library/Application Support/Maxon`

`~/Library/Application Support/Maxon`
<br><br>

## BorisFX

### Windows

`C:\Program Files\BorisFX`

`C:\ProgramData\BorisFX`

`%AppData%\BorisFX`

`%LocalAppData%\BorisFX`
<br><br>
### MacOS
`/Applications/BorisFX*`

`/Library/Application Support/BorisFX`

`~/Library/Application Support/BorisFX`
<br><br>

## Red Giant

### Windows

`C:\Program Files\Maxon`

`C:\Program Files\Red Giant`

`C:\ProgramData\Maxon`
<br><br>
### MacOS

`/Library/Application Support/Maxon`

`/Library/Application Support/Red Giant`

---
## ✧ Windows <span id="windows"></span>

### Before You Start <span id="bysw"></span>
1. Close the application you're uninstalling.

2. Close any related background processes using **Task Manager**.

3. If the software installs services *(such as Maxon, Adobe, BorisFX, etc.)*, ensure those are closed as well.

You may restart your computer for extra precaution, though it's not always necessary.

---
### Use the Official Uninstaller <span id="ounw"></span>
Always uninstall using the developer's own uninstaller first.

This can usually be found in one of these locations:

`Settings` > `Apps` > `Installed Apps`

or

`Control Panel` > `Programs and Features`

Some developers also include dedicated uninstallers inside their installation folders. If the developer provides a cleanup utility, use that before manually deleting files.

---
### Check Plugin Folders <span id="plfw"></span>

Many plugins install outside of the program itself.

Check these folders for any leftover plugin folders:
<br><br>
#### Adobe MediaCore
`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore`

<span class="note">Common folders include:
`BorisFX` `Continuum` `Sapphire` `Mocha` `Maxon` `Red Giant` `Universe` `Trapcode` `Magic Bullet` `Element` `Deep Glow` `Optical Flares`</span>

Delete only folders belonging to the software you're removing.
<br><br>
#### OFX Plugins
`C:\Program Files\Common Files\OFX\Plugins`

Many video plugins install here.

<span class="note">Examples include: `Sapphire` `Continuum` `Mocha` `Neat Video` `FilmConvert` `Topaz`</span>

---
### Remove Remaining Program Files <span id="rpfw"></span>

Check these locations:

`C:\Program Files`

`C:\Program Files (x86)`

`C:\ProgramData`

Delete folders belonging to the software you're uninstalling.

<span class="note">Examples include:
`C:\Program Files\Maxon` `C:\ProgramData\Maxon` `C:\Program Files\BorisFX` `C:\ProgramData\BorisFX`</span>

---
### Remove AppData & User Files <span id="adcw"></span>

1. Press `Win` + `R` and type `%AppData%`.

2. Delete any folders related to the software.

3. Repeat for `%LocalAppData%` and `%LocalLow%`.

These folders should contain caches, preferences, logs, and/or licensing information.

---
### Registry Cleanup (Optional) <span id="rgcw"></span>

This step is usually unnecessary. Only do this if reinstalling still doesn't solve your issue.

1. Open **Registry Editor**.

2. Search for the software name and remove only entries clearly belonging to it.
<span class="note">Examples include:
`Maxon` `BorisFX` `RedGiant` `Adobe`</span>

Be careful when editing the registry as deleting unrelated entries may cause Windows or other software to malfunction. If you feel uncertain about following through with this step, skip it or **reach out to us** for any questions.

---
## ✧ MacOS <span id="macos"></span>

### Before You Start <span id="bysm"></span>
1. Close and **Quit** the application you're uninstalling.

2. Open **Activity Monitor** and close any remaining background processes.

3. Restart your Mac if you'd like. It's recommended, but not always necessary.

---
### Use the Official Uninstaller <span id="ounm"></span>

If the software includes an uninstall tool, use it first.

Otherwise:

1. Drag the application to **Trash**.

2. Empty the **Trash** afterwards.

---
### Check Plugin Folders <span id="plfm"></span>

Check these locations for any leftover plugin folders:
<br><br>
#### Adobe MediaCore
`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore`
<br><br>
#### OFX Plugins
`/Library/OFX/Plugins`
<br><br>
#### Audio Units
`/Library/Audio/Plug-Ins`

Only remove plugins related to the software you're uninstalling.

---
### Remove Remaining Program Files <span id="rpfm"></span>

Check these folders:

`/Applications`

`/Library/Application Support`

`~/Library/Application Support`

`/Library/Preferences`

`~/Library/Preferences`

`/Library/Caches`

`~/Library/Caches`

`/Library/Logs`

`~/Library/Logs`

Delete folders belonging to the software.

---
### Clear Preferences & Caches <span id="pncm"></span>

Delete preference files if they remain.

These are commonly stored in: `~/Library/Preferences` or `~/Library/Application Support`.