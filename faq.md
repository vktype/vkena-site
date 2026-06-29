# ✦ Frequently Asked Questions

### [✧ General](#general)
- [Is [plugin] compatible with my After Effects version?](faq#piv)
- [How can I resolve "This unlicensed Adobe app will be disabled"?](faq#gcc)
- [What will happen if I switch After Effects versions?](faq#swt)
- [What are plugins and which ones should I download?](faq#pdw)
- [Which version of After Effects should I get?](faq#rev)
- [Can I download cracked plugins despite having a legitimate software copy?](faq#lsc)
- [There is a watermark when I use a plugin.](faq#wtm)
- [My software says it can be updated. Should I click accept?](faq#pdt)
- [I have duplicate effects from a plugin. What do I do?](faq#dup)
- [I installed an extension (e.g. Flow) that appears in the list, but nothing happens when I click on it.](faq#eep)
- [Generative AI is not working. Help!](faq#gai)
- [Missing CEP folder.](faq#cep)
- [Magic Bullet Look presets not appearing same as the original coloring.](faq#mbl)
### [✧ Windows](#windows)
- ["Windows cannot complete the extraction. The destination file could not be created."](faq#wxt)
- ["An unexpected error is keeping you from copying the file, Error 0x80004005."](faq#cer)
- ["The application was unable to start correctly (Oxc0000142). Click OK to close the application."](faq#ser)
- ["The system cannot find the path specified."](faq#scp)
- [Error Code: 24 (Adobe)](faq#ect)
- ["AfterFX.exe - System Error. The code execution cannot proceed because MSVCP110.dll was not found."](faq#erm)
- [DaVinci Resolve Studio not starting (Windows).](faq#drs)
- ["The installation cannot continue as the installer file may be damaged. Download the installer file again."](faq#imd)
- [Error Code 127 (Adobe)](faq#eco)
- ["Patching Error - Pattern in Resolve. exe matched 0 times in .text section. Expected exactly 1."](faq#per)
- [Windows Defender is blocking an application from running and I don't know how to stop it?](faq#wde)
- [I’m unable to launch specific games (e.g Valorant) after Adobe installation(s)?](faq#vgl)
- [DeleteFile failed; code 5. Access is denied. (Red Giant Service.exe)](faq#cfd)
- ["Error copying file from [...] Red Giant Service.exe" (Maxon App)](faq#fer)
### [✧ MacOS](faq#macos)
- ["After Effects can't continue: unexpected failure during application startup."](faq#aec)
- ["The following plugins are installed but are not yet compatible with this version."](faq#pci)
- ["Is damaged and cannot be opened, you should eject the disk image / you should move it to the trash."](faq#ddi)
- ["The installation cannot continue as the installer file may be damaged. Download the installer file again."](faq#icc)
- ["You don't have XCode Command Line tools"](faq#xcc)
- ["Error: couldn't find main entry point"](faq#eer)
- [Failed with error code 133 (Adobe)](faq#ott)
- ["Cannot be opened because it is from an unidentified developer" / "because Apple cannot check it for malicious software" / "cannot verify that this app is free from malware."](faq#uid)
- ["Unable to expand [X] into " ". (Error 79)"](faq#esn)
- ["There was a problem installing CCXProcess"](faq#ccx)
- ["The file “Patch.command” could not be executed because you do not have appropriate access privileges."](faq#pcp)
- [Error creating directory / ***unknown variable asesupportfilepath 1***](faq#uvs)
- [Error Code 127 (Adobe)](faq#ots)
- [Error: SyntaxError: JSON Parse error: Unexpected EOF (-2700)](faq#jsn)
- [When I type my password in Terminal nothing happens?](faq#pit)
- [I can't find my Library folder in Finder.](faq#lff)
- ["Adobe X wants to access key "Adobe Licensing Information“ in your keychain"](faq#ali)
---
## ✧ General <span id="general"></span>
### Is [plugin] compatible with my After Effects version? <span id="piv"></span>
The majority of plugins available will work on any standard version of After Effects (2020+). Scripts and extensions will vary; look into their developer notes.
<br><br>
### How can I resolve "This unlicensed Adobe app will be disabled"? <span id="gcc"></span>
This alert is fairly common and easily fixable. Click [here](aup.md) to learn how to remove it.
<br><br>
### What will happen if I switch After Effects versions? <span id="swt"></span>
Click [here](vsg.md) to learn how you can make a smooth transition when upgrading versions without losing any of your plugins or presets. It's easier than you might think.
<br><br>
### What are plugins and which ones should I download? <span id="pdw"></span>
Click [here](bgtae) for starter recommendations. Ultimately, it entirely depends on your style.
<br><br>
### Which version of After Effects should I get? <span id="rev"></span>
The newest version (features) is always worth getting as long as you have enough RAM and a good CPU, click [here](bgtae.md) for more information.
<br><br>
### Can I download cracked plugins despite having a legitimate software copy? <span id="lsc"></span>
Yes. Why are you paying for it, though?
<br><br>
### There is a watermark when I use a plugin. <span id="wtm"></span>
A watermark, typically a red X means that whatever plugin you're using is unlicensed. This indicates you did not install it properly. Make sure to properly read the instructions or refer to our support server for assistance.
<br><br>
### My software says it can be updated. Should I click accept? <span id="pdt"></span>
No, these are official pop-ups. The software will no longer be licensed if you do so.
<br><br>
### I have duplicate effects from a plugin. What do I do? <span id="dup"></span>
This indicates you have two versions of a plugin installed, or in different locations. Choose and delete one of the paths shown in your error. For example, Sapphire:

`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Sapphire Plug-ins`

`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\BorisFX\Sapphire Plug-ins`

You can either delete one of these folders, though, consider removing both of them and reinstalling if you're attempting to upgrade a plugin to be safe.
<br><br>
### I installed an extension (e.g. Flow) that appears in the list, but nothing happens when I click on it. <span id="eep"></span>
Ensure that the CEP (Common Extensibility Platform) is enabled.

<span style="font-weight: 800;">Windows</span>:

1. Close After Effects.
2. Download this [file](https://www.mediafire.com/file/ak5jdd2y6z2si09/keys.reg/file) and run it.

<span style="font-weight: 800;">Mac</span>:

1. Close After Effects and open Terminal.
2. Copy and paste the text below:

```ts
defaults write com.adobe.CSXS.10 PlayerDebugMode 1
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
defaults write com.adobe.CSXS.12 PlayerDebugMode 1
defaults write com.adobe.CSXS.13 PlayerDebugMode 1
```
3. Hit enter and you're done.
<br><br>
### Generative AI is not working. Help! <span id="gai"></span>
AI Tools such as Generative Fill will not work on cracked versions of Photoshop due to the fact that Adobe uses a credit system for verification specifically for it.
<br><br>
### Missing CEP folder.<span id="cep"></span>
Make sure your installation isn’t faulty, and that scripting and expressions are enabled in After Effects.

Open After Effects and enable “Allow Scripts to Write Files and Access Network”.

Windows: `Edit > Preferences > Scripting & Expressions`

Mac: `After Effects > Preferences > Scripting & Expressions`

<span style="font-weight: 800;">Create the CEP folder manually</span>:

Go to the location below and create a **CEP** folder, and inside that CEP folder, create another folder named **Extensions**.

Windows: `C:\Program Files (x86)\Common Files\Adobe`

Mac: `/Library/Application Support/Adobe/`
<br><br>
### Magic Bullet Look presets not appearing same as the original coloring. <span id="mbl"></span>
Many Looks Builder tools were updated in the 2025 release, causing older presets to appear overexposured.

1. Open Looks Builder.
2. At the top at "In/Out Color Space", press the dropdown menu.
3. Select "1D sRGB (Video)"
---
## ✧ Windows <span id="windows"></span>
### "Windows cannot complete the extraction. The destination file could not be created." <span id="wxt"></span>
This error occurs if a file hasn't been properly extracted. Please follow the instructions written in the [extraction page](xtr.md) regarding how to use 7-Zip.
<br><br>
### "An unexpected error is keeping you from copying the file, Error 0x80004005." <span id="cer"></span>
This error occurs if a file hasn't been properly extracted. Please follow the instructions written in the [extraction page](xtr.md) regarding how to use 7-Zip.
<br><br>
### "The application was unable to start correctly (Oxc0000142). Click OK to close the application." <span id="ser"></span>
Starting from version 24.1, **After Effects requires your processor to support Advanced Vector Extensions 2** or else the software will not launch.

If your processor does not support AVX2, **you'll need to downgrade to AE 2023 or lower**.
<br><br>
### "The system cannot find the path specified." <span id="scp"></span>
Move the folder to your desktop and try again. If that does not work, remove the "/" symbol from the folder name if included.
<br><br>
### Error Code: 24 (Adobe) <span id="ect"></span>
- Extract the iso file itself (Right click > 7-Zip > Extract here)
- Temporarily turn off your internet.
- Open the extracted folder and run Set-up.exe again.
<br><br>
### "AfterFX.exe - System Error. The code execution cannot proceed because MSVCP110.dll was not found." <span id="erm"></span>
Your computer is missing necessary components. Install the [Microsoft Visual C++ Redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) and restart your computer.
<br><br>
### DaVinci Resolve Studio not starting (Windows). <span id="drs"></span>
Rename OFX folder "Plugins" (`C:\Program Files\Common Files\OFX`) to "Plugins.origin".
<br><br>
### "The installation cannot continue as the installer file may be damaged. Download the installer file again." <span id="imd"></span>
This error occurs if a file hasn't been properly extracted. Please follow the instructions written in the [extraction page](xtr.md) regarding how to use 7-Zip.

If it is properly extracted, it may mean you have leftovers from a previous installation. Use the official [Adobe Creative Cloud Cleaner Tool](AdobeCreativeCloudCleanerTool.exe) to get rid of previous installations.
<br><br>
### Error Code 127 (Adobe) <span id="eco"></span>
[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This can happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.

1. Navigate to the `adobetemp` folder located at `<Root Drive>\adobeTemp`. In the following example, the root drive is the C: drive.

:::tip
If the folder doesn't exist, you can also create the folder.
:::
2. Right click anywhere on screen > **Properties**.
3. In the **Security** tab, ensure that permissions for **System** and **Administrators** have **Full Control**.
4. Turn off your antivirus temporarily or whitelist it.
<br><br>
### "Patching Error - Pattern in Resolve. exe matched 0 times in .text section. Expected exactly 1." <span id="per"></span>
This error occurs when a user mistakenly installs the free version of DaVinci Resolve and then runs our patch, which is intended for the **Studio** version. Ensure that you install the correct version.
<br><br>
### Windows Defender is blocking an application from running and I don't know how to stop it? <span id="wde"></span>
You can either exclude or whitelist the file, disabling Defender completely is not recommended.

<span style="font-weight: 800;">Exclude</span><span class="note" style="display: inline-block; margin-left: 8px;">[Video Tutorial](https://files.catbox.moe/jnwuuc.mp4)</span>

1. Click the Windows key and write "Settings".
2. Go to **Privacy & security** > **Windows Security** > **Virus & Threat Protection**.
3. Under **Virus & Threat Protection** settings, click **Manage settings**.
4. Under **Exclusions**, click on **Add or remove exclusions**.
5. Choose your installer/installation folder.

<span style="font-weight: 800;">Whitelist</span><span class="note" style="display: inline-block; margin-left: 8px;">[Video Tutorial](https://files.catbox.moe/uczy2z.mp4)</span>

1. Open **Virus & Threat Protection**.
2. When the blocked file shows up under current threats, click it and on **Action options**, select **Allow on device**.
3. Finalize decision by pressing **Start actions**.
<br><br>
### I’m unable to launch specific games (e.g Valorant) after Adobe installation(s)? <span id="vgl"></span>
If after installation you start having problems with programs and games that worked fine before, simply delete the following registry key:

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\DevOverrideEnable`

then reboot your system.
<span class="note">If using GenP, you will have a toggle in-app for the Registry Key.</span>
Certain games and other sensitive apps that use anti-cheat mechanisms may detect and flag DLL redirection as suspicious activity which may result in false positives.
<br><br>
### DeleteFile failed; code 5. Access is denied. (Red Giant Service.exe) <span id="cfd"></span>
1. Open **Task Manager** *(Ctrl+Shift+Esc)*.
2. Search **Red Giant Service** and **MxNotify**.
3. **Right click** > **End tasks**.
4. Try again.
<br><br>
### "Error copying file from [...] Red Giant Service.exe" (Maxon App) <span id="fer"></span>
1. Open **Task Manager** *(Ctrl+Shift+Esc)*.
2. Search **Red Giant Service** and **MxNotify**.
3. **Right click** > **End tasks**.
4. Try again.
---
## ✧ MacOS <span id="macos"></span>
<div style="background-color: #302e2e; padding: 16px; border-radius: 6px">
  Common questions and troubleshooting for issues on Mac.
</div>
<br>

### "After Effects can't continue: unexpected failure during application startup." <span id="aec"></span>
After Effects 2021 and below are not compatible with OS14 and higher. You won’t be able to launch these versions of After Effects. Your only option is to install After Effects 2022 or newer.
<span class="note">If this appears on 2022+, refer to [this](https://community.adobe.com/bug-reports-528/after-effects-23-6-and-24-0-not-starting-on-macos-14-sonoma-1216945#comments)</span>
<br>
### "The following plugins are installed but are not yet compatible with this version". <span id="pci"></span>
This issue occurs when a user installs an outdated plugin only designed for Intel Macs on After Effects that is running natively on Apple Silicon (M1+ on After Effects 2022+).

Only a small number of plugins on this site are not supported, click [here](ros.md) for a more in-depth explanation and assistance on your choices moving forward.
<br><br>
### "Is damaged and cannot be opened, you should eject the disk image / you should move it to the trash." <span id="ddi"></span>
<span style="font-weight: 800;">If the error occurs when running an application file</span>:
1. Drag the installer to your desktop, open Terminal and input `sudo xattr -cr`.
2. Drag the installer file next to the command. **There must be a space between the command and the file**.
Hit **Enter** and submit your Mac password. Passwords are not displayed when typed into Terminal, so you won't see this.

<span style="font-weight: 800;">If a plugin shows this error inside After Effects</span>:
1. Open Terminal and input `sudo xattr -rd com.apple.quarantine`.
2. Drag the plugin file next to the command, **there must be a space between the command and the file**.
3. Hit enter and submit your Mac password. Passwords are not displayed when typed into Terminal, you wont see this.

Still having issues? Try using [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to solve the problem.
<br><br>
### "The installation cannot continue as the installer file may be damaged. Download the installer file again." <span id="icc"></span>
**Right Click** > **Show Package Contents** > **Contents** > **MacOS** > **Install**.
<br><br>
### "You don't have XCode Command Line tools" <span id="xcc"></span>
- Monters "23.6 fix.pkg" is unsupported on Sonoma, causing this error. You won't be able to run it.

You can download and run this alternative [patcher](https://www.mediafire.com/file/xp67w6dfdfqtb6s/ADOBE_23.6_FIX_-_SATVRN.zip/file) instead. Instructions are included.
<br><br>
### Error: couldn't find main entry point {#eer}
This typically means the plugin you're trying to run is missing a key file it needs to start, or it’s not installed correctly. Refer to text instructions and/or visual guides and reinstall it from scratch.
<span class="note">If seeing this with Twixtor 8, use the RE:Vision 2303 Bundle.</span>
<span style="font-weight: 800;">Last Resort: Disable Gatekeeper</span>

Use [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to sign the plugin or disable gatekeeper, proceed with caution.
<br><br>
### Failed with error code 133 (Adobe) <span id="ott"></span>
Error 133 indicates insufficient disk space to download and install the applications. Free up some space or select another location for your app and try again.
<br><br>
### "Cannot be opened because it is from an unidentified developer" / "because Apple cannot check it for malicious software" / "cannot verify that this app is free from malware." <span id="uid"></span>
By default, macOS blocks most apps that aren’t from the App Store and lack signatures, even if they’re completely safe.

<span style="font-weight: 800;">If the error occurs when attempting to run any sort of dmg or pkg file</span>:

1. **Right-click** the file *(hold **Control** and **click** the file to bring up the menu)*
2. Select **Open**
3. It will show a warning, but this time it will give you an **Open Anyway** button.

<span style="font-weight: 800;">If the error occurs for a plugin</span>:

1. Click the **Apple logo** in the top left corner
2. Go to **System Settings**
3. Open **Security & Privacy**
4. At the bottom of the window, look for a message saying the app/plugin was blocked
5. Click **Allow Anyway**
<span class="note">You might need to unlock settings by clicking the lock icon in the bottom left corner, and then entering your password.</span>

Still having issues? Try using [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to sign or unblock the app.
<br><br>
### "Unable to expand [X] into " ". (Error 79)" <span id="esn"></span>
This error occurs if a file hasn't been properly extracted. Please follow the instructions written in the [extraction page](xtr.md) regarding how to use Keka.
<br><br>
### "There was a problem installing CCXProcess" <span id="ccx"></span>
1. Open Terminal
2. Copy and paste `sudo softwareupdate --install-rosetta --agree-to-license`.
3. Press enter. After Rosetta is installed, run the Adobe installer again.
<br><br>
### "The file “Patch.command” could not be executed because you do not have appropriate access privileges." <span id="pcp"></span>
1. Open **Terminal**.
2. Input `chmod +x`.
3. Insert a space after the command.
4. Drop the file into **Terminal**.
5. Click on the Terminal window, and then press **Return**.
<br><br>
### Error creating directory / ***unknown variable asesupportfilepath 1*** <span id="uvs"></span>
This error can appear when attempting to install Maxon plugins.

1. Click **Abort**
2. Open **Terminal**
3. Input the following:

`sudo sh /Volumes/Red\ Giant\ Installer/Red\ Giant\ Installer.app/Contents/MacOS/installbuilder.sh --mode text`

4. Enter you password when prompted, and then hit **Y** if prompted.

### Error Code 127 (Adobe) <span id="ots"></span>
[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This can happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.
:::tip
Open the folder where you want to see the hidden files, and select "Command"+"Shift"+"." keys simultaneously.
:::
1. Navigate to the folder located at: `/System/Volumes/<Root Drive>/.adobeTemp`.
2. Go to **File** > **Get Info**, then select **Sharing & Permissions**.
3. Select system from the Name column. Ensure that is has **Read & Write** privileges.
4. Turn off your antivirus temporarily or whitelist it. You can also free up some space and retry.
<br><br>
### Error: SyntaxError: JSON Parse error: Unexpected EOF (-2700) <span id="jsn"></span>
1. Uninstall Creative Cloud with the [Creative Cloud Cleaner Tool](https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/prepare-to-run-creative-cloud-cleaner-tool.html).
2. Navigate to: `/Library/Application Support/Adobe/` and **delete** the folder **Caps**.
<span class="note">This folder stores installation records; if they’re corrupt, the installer crashes.</span>
3. Reinstall again.
<br><br>
### When I type my password in Terminal nothing happens? <span id="pit"></span>
For security purposes your password is completely hidden in **Terminal**, type the password to unlock your Mac and hit **Enter** as normal.
<br><br>
### I can't find my Library folder in Finder. <span id="lff"></span>
Library is hidden by default on Mac. To enable it, do this:

1. Open Finder.
2. In the top left go to **Settings** > **Sidebar** > **Enable Hard Disks**.

Now you'll find **Macintosh** on the left sidebar, and inside, your **Library**.
<br><br>
### "Adobe X wants to access key "Adobe Licensing Information“ in your keychain" <span id="ali"></span>
Either submlit the password used to unlock your Mac and click allow, or deny.

If notification persists often, run this [dmg file](https://www.mediafire.com/file/36i034ldsmdiact/Adobe_Keychain_Fixer_v0_15_Monter_Group.dmg/file).