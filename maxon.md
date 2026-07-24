# ✦ Maxon Troubleshooting Guide
**Please pay attention while reading this guide and its descriptions.**
This guide goes over a couple of different issues, find the one that applies to you.

- [You installed the plugins but it wont show in After Effects](#ipa)
    - [Windows - Automatic Method](#w-am)
    - [Windows - Manual Method](#w-mm)
    - [MacOS - Manual Method](#m-mm)
- [Your plugins are unlicensed](#pau)
- [Only some effects are unlicensed](#seu)
- [Service Unavailable / Security Alert](#ssa)

---
### You installed the plugins but it wont show in After Effects <span id="ipa"></span>
If you are using After Effects 2023 or a version prior (2022,2021,2020..), Red Giant and Universe will not install correctly. This has been a fact since their 2024 releases. While they are compatible and fully functional once installed, you'll have to force them to install with a few extra steps.

#### Windows - Automatic Method <span id="w-am"></span>
1. Open **PowerShell** and copy & paste this: 

`Get-ChildItem -Path "HKLM:\SOFTWARE\Adobe\After Effects"`

2. Under [**Name**](https://ibb.co/WvhzHQPK), you will see your version.
<span class="note">Change "XX.X" in the next step to this number.</span>
3. Open **PowerShell** as **Administrator** and paste this in:

`Copy-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\XX.X" -Destination "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse`
<span class="note">Remember to change XX.X to your own After Effects version, or else this will not work.</span>
4. Now run the plugin installers *(Red Giant & Universe)*.

5. Close **After Effects** & run the patch *(service unlocker)*.

6. Once done, check if all installed in After Effects, then run:

`Remove-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse`
<br><br>
#### Windows - Manual Method <span id="w-mm"></span>
1. Download and install **After Effects 2024** or above *(2025, 2026..)*.
2. Run the **Red Giant** installer and **Universe** installers.
3. Patch the plugins through the **Service Unlocker**.
4. Open your main **After Effects** version and verify that it works.
5. You can now delete **After Effects 2024+** if you wish.
<br><br>
#### MacOS - Manual Method <span id="m-mm"></span>
1. Download and install **After Effects 2024** or above *(2025, 2026..)*.
2. Run the **Red Giant** installer and **Universe** installers.
3. Patch the plugins via `license.pkg`.
4. Open your main **After Effects** version and verify that it works.
5. You can now delete **After Effects 2024+** if you wish.
<br><br>
### Your plugins are unlicensed <span id="pau"></span>
<span class="note">Your plugins will be unlicensed if it shows a [grey box](https://ibb.co/G4s1V721) on screen when effect is applied.</span>
Open Maxon App and look in the top right corner — are you logged in (do you see your email?)?

If you are logged in, log out and **stay in RLM mode**, then run patcher again.

RLM mode = logged out.

If it still shows as unlicensed despite being patched correctly (It would shows a green circle in the Maxon app, with the words **License Found**) next to the product, try clearing your cache in **After Effects**.

If you're on **MacOS**, ensure **Terminal** has full disk access and re-run the license via **System Settings** > **Privacy & Security** > **Full Disk Access** > add **Terminal**.

If you're on **Windows** and use a third party anti-virus besides **Windows Security**, ensure it isn't blocking the patch. Instructions will vary per anti-virus.
<br><br>
### Only some effects are unlicensed <span id="seu"></span>

This typically happens with Trapcode plugins, such as Particular. If After Effects is installed on a secondary drive or in a custom folder path, the automated patcher cannot locate the files to patch them.

1. Ensure your *Adobe After Effects* folder is located in the default directory (`C:\Program Files\Adobe\`). If it's not, temporarily move or install it there.
2. Completely close After Effects and end any background Adobe/Maxon tasks in Task Manager ( **Ctrl** + **Shift** + **Esc** ).
3. Run the patcher as **Administrator**.
4. Once patched and verified working, you can move your After Effects folder back if desired.
<br><br>
### Service Unavailable / Security Alert <span id="ssa"></span>
<span class="note">If you get a [black screen](https://ibb.co/4gD62pfk) showing Maxon's service as unavailable, follow these steps.</span>
Completely uninstall maxon using the cleaner according to your OS. ( [Windows](https://www.mediafire.com/file/v6qmxw1xc4osl55/win.maxon-cleaner.cmd/file) / [Mac](https://www.mediafire.com/file/jp6n78gqw1cuf9o/uninstallmaxon.sh/file) )

Run the **Maxon App** installer and patch again.

You can check manually if you have **Red Giant Service** here:

Windows: `C:\Program Files\Red Giant\Services`

MacOS: `/Library/Application Support/Red Giant/Services/`