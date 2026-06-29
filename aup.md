# ✦ Adobe Ungenuine Pop-Up Fixes
All Adobe software includes a client called "Adobe Genuine Service" which periodically verifies whether installed Adobe apps are genuine or not, and if triggered, said software will be disabled after a 10 day grace period. That said, there's no need to panic as this is easily fixable.

If you are a user of GenP or MacKed, please refer to any built in tools or their respective websites for more accurate information rather than this guide.

[✧ Windows](#windows)

<div class="indent">

[✧ Method 1 - Firewall Rules](#windows-m1)

[✧ Method #2 - Block IPs](#windows-m2)

[✧ Method #3 - Uninstall AGS](#windows-m3)

</div>

[✧ MacOS](#macos)

<div class="indent">

[✧ Method #1 - Block IPs automatically](#macos-m1)

[✧ Method #2 - Firewall Rules](#macos-m2)

[✧ Method #3 - Manual IP block](#macos-m3)

</div>

---
## ✧ Windows <span id="windows"></span>
<div style="background-color: #302e2e; padding: 16px; border-radius: 6px;">
  <strong>The basics</strong>
  <ul>
    <li>Don't be on a virtual IP address (VPN/Proxy) - it will circumvent local settings such as hosts file or firewall rules.</li>
    <li>Make sure your firewall is enabled or else no rules will not be applied.</li>
    <li>Don't have Creative Cloud installed. m0nkrus installers block communications to Adobe servers, and you require no account to use m0nkrus. It will very often break if you have Creative Cloud. Uninstall it <a href="/AdobeCreativeCloudCleanerTool.exe" download>here</a>.</li>
  </ul>
</div>

### ✧ Method 1 - Firewall Rules <span id="windows-m1"></span>
Blocking the targeted software from connecting to the internet is effective as it prevents Adobe Genuine Service from being able to verify your licensing status.
You can easily do this by setting up some firewall rules.

1. Open "Windows Defender Firewall with Advanced Security".
2. Click “Outbound Rules” on the left side.
3. Click [**New Rule...**](https://ibb.co/vCkNprn0) on the right side.
4. Select your Adobe application(s), for example, "AfterFX.exe" for After Effects which is normally located at:

`C:\Program Files\Adobe\Adobe After Effects (version)\Support Files`
5. Select “Block the Connection” and name the rule whatever you want.
6. If the alert still appears, repeat the same steps but this time set up an "Inbound" rule.
<span class="note">[Video Tutorial](https://files.catbox.moe/2mqe5t.mp4)</span>
<div style="background-color: #302e2e; padding: 16px; border-radius: 6px;">
  <strong>Important</strong>
  <ul>
    <li>You must block the actual <strong>exe</strong>, not a shortcut, in order for this to work. Shortcut icons have <a href="https://ibb.co/BKP9fFBJ">arrows</a> on them.</li>
    <li>If you have a third party software managing your firewall <a href="https://ibb.co/MKWXCvT">(how do I check?)</a> , you'll have to block the app inside that software for this to work.</li>
  </ul>
</div>

Alternatively, you can automatically block **all** Adobe firewalls by running [this script](https://gist.github.com/ph33nx/0ed14724213c4cc467c85826c9dca908).

<span class="note">This is not recommended if you're paying for any Adobe software or have a paid plugin/script.</span>

1. Download the script (Download ZIP, top right).
2. Extract the zip folder.
3. Open the folder and run the *.bat* as administrator.
4. Wait for it to complete, then you are done.

<span class="note">[Video Tutorial](https://files.catbox.moe/a2rdrg.mp4)</span>
<br>
### ✧ Method #2 - Block IPs <span id="windows-m2"></span>
This method consists of blocking individual IPs that are linked to GCC, rather than blocking the software's internet connection as a whole. This method may require occasional updating as Adobe goes under new IPs, but is very effective and only blocks what is necessary, allowing users to keep access to any online only tools.
1. Open PowerShell as Administrator and paste this command:

`Stop-Process -Name "Adobe Desktop Service" -force`

<span class="note">If it says it [cannot find the process](https://ibb.co/23n17H0t), don't worry and continue to the next step.</span>

2. Open **Notepad** as **Administrator**, click **File** in the top left hand corner, then **Open**.
3. Head to the following location and make sure to select **All file types (.)**, NOT **text (.txt)**:

`C:\Windows\System32\drivers\etc`

4. Select the file named [**host**](https://ibb.co/XZdM3JKY) and click **Open**.
5. On a blank line below all existing text, copy and paste this [list](https://a.dove.isdumb.one/list.txt) of IPs and **Save**.
<span class="note">Do not copy the text above the IP's. Start [here](https://ibb.co/G4Q0nRGp)</span>
<span class="note">[Video Tutorial](https://files.catbox.moe/b5otdd.mp4)</span>
<br>
### ✧ Method #3 - Uninstall AGS <span id="windows-m3"></span>
This method will uninstall Adobe Genuine Service, however it's one of the methods that rarely work, but is worth trying.

1. Open **PowerShell** as Administrator and input:

`[System.Diagnostics.Process]::Start("C:\Program Files (x86)\Common Files\Adobe\AdobeGCClient\AdobeCleanUpUtility.exe")`

2. Follow the on-screen instructions. If that directory is absent, then the service won’t be installed. **If absent, skip this method**.
#### Block AGS in firewall:
Create Outbound rules on Adobe Genuine Service.
Path of AGS:

`C:\Program Files (x86)\Common Files\Adobe\Adobe Desktop Common\AdobeGenuineClient\AGSService.exe`

`C:\Program Files\Adobe\Acrobat DC\Acrobat\GC\AGSService.exe`

---
## ✧ MacOS <span id="macos"></span>
### ✧ Method #1 - Block IPs automatically <span id="macos-m1"></span>
Download [Adobe Genuine Pop-up Blocker](https://www.mediafire.com/file/0dcny7p9fsa58hf/Adobe_Genuine_Pop-Up_Blocker_1.05_2.zip/file) and run it.

This is a script that updates the hosts file with the [Adobe blocklist](https://a.dove.isdumb.one/list.txt) periodically.
It runs in the background, and updates upon startup, and then every 30 minutes.
*(If the blocklist url or internet isn't available, the hosts file is left untouched.)*

<div style="background-color: #302e2e; padding: 16px; border-radius: 6px">

&#x20; If you are doing this method, you do not need to do <strong>Method #3</strong>.
This is simply an automatic method, while #3 is manual.

</div>
<br>

### ✧ Method #2 - Firewall Rules <span id="macos-m2"></span>
Since blocking outgoing connections isn't a feature available on MacOS, you will need to download a third party software in order to achieve this. [Radio Silence](https://objective-see.org/products/lulu.html) is one of the best and easiest firewall apps for MacOS.

[Radio Silence](https://objective-see.org/products/lulu.html) normally costs 9 USD, however, you can download a free version [here](https://www.mediafire.com/file/bygs637bw9bemyz/Radio_Silence_3_3.dmg/file). Serial numbers are included in a text file in order to license the program.
#### Instructions (Radio Silence):
1. Open **Radio Silence**, make sure **On** is toggled on.
2. Click **Block Application**, and select your adobe app(s).
3. Click **Open**, and you're done. You can close the app.
<span class="note">[Video Tutorial](https://files.catbox.moe/q2v0z6.mp4)</span>

#### If the alert still shows after using Radio Silence:
1. Open **Security & Privacy** in Mac settings.
2. Under **Firewall** select **Firewall Options**.
3. Click the + icon and select your Adobe software.
4. Select **Block Incoming Connections** and click **OK**.

<br>

### ✧ Method #3 - Manual IP block <span id="macos-m3"></span>
1. Open **Terminal** and paste this command:

`sudo nano /etc/hosts`

Enter your password when prompted. It will not show due to censorship.
2. Use the arrow keys on your keyboard to move the cursor to the very bottom. On a blank line below all existing text, copy and paste this [list](https://a.dove.isdumb.one/list.txt).
<span class="note">Do not copy the text above the IP's. Start [here](https://ibb.co/G4Q0nRGp)</span>

3. Press **Ctrl** + **X**, Input: **Y**, then press your **Return** key to save.

4. In a new terminal window, paste this command and click **Enter**:

`sudo killall -HUP mDNSResponder`

5. Restart your computer and the alert should be gone.
<span class="note">As stated previously, Adobe will sometimes switch addresses, meaning that your *Disabled* alert may re-appear later. Just repeat the same steps to include any new IPs in your host, as the list above is frequently updated.</span>