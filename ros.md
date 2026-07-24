# ✦ Rosetta Guide (MacOS)
Starting in 2022, Adobe After Effects runs natively on Apple Silicon and while this was a great update it terms of preformance (Silicon being a powerhouse and successor over Apple's previous Intel Macs), it also poses the slight issue of outdated plugins not loading. Read below to learn more information.
- ["The following plugins are installed, but are not yet compatible with this version of After Effects...”](ros#pic)
- [What is Rosetta, exactly?](ros#wis)
    - [**Important**](ros#imp)
- [How to enable Rosetta](ros#hte)
- [Which After Effects version should I install?](ros#ver)
- [Plugin M1+ Compatibility (List)](ros#pcl)
    - [Updated - (does not require Rosetta)](ros#udr)
    - [Not updated - (requires Rosetta)](ros#nrs)

---
### "The following plugins are installed, but are not yet compatible with this version of After Effects...” <span id="pic"></span>
You can easily fix this by enabling “Rosetta”, however do keep in mind that if you enable Rosetta you’ll lose performance benefits that come with owning an Apple Silicon Mac. In this situation you'll have to pick whichever is more important to you.
<br><br>
### What is Rosetta? <span id="wis"></span>
Rosetta acts as a translator, allowing After Effects to run as if it were on an Intel Mac. This in turn makes any third party plugins only built for Intel now compatible as After Effects is ultimately the host, i.e., if After Effects is running as Intel, so do your plugins, however you will lose your M1+ benefits and preformance will ultimately drop. Enabling Rosetta is a simple process.
<br>

#### Important <span id="imp"></span>
- **Adobe removed the option to enable Rosetta in After Effects 2024 and later.**
- You may not need Rosetta depending on which plugins you plan to use, scroll down to learn which from our list have been updated to support Apple Silicon.
<br><br>

### How to enable Rosetta <span id="hte"></span>
1. Open Finder
2. Go to **Applications** and open **Adobe After Effects** (this is a folder).
3. Right click the application *(.app)* file INSIDE the folder and click **Get Info**.
4. Under the **General** tab, checkmark **Open using Rosetta**.

You must follow these steps exactly. You won't be able to enable Rosetta through a desktop shortcut.
<span class="note">Click [here](https://www.youtube.com/shorts/dFFfBaWoH0A) for a video.</span>
If the option to enable Rosetta is missing despite doing everything correctly **(excluding After Effects 2024/2025 and Intel Macs, obviously)**, you may need to install *Rosetta 2* using a command line.
1. Open **Terminal**.
2. Paste the following command:

`sudo softwareupdate --install-rosetta --agree-to-license`
<span class="note">Click [here](https://www.youtube.com/shorts/LRh7WvCsmy8) for a video.</span>
<br>
### Which After Effects version should I install? <span id="ver"></span>
Main points:

- After Effects 2021 and older are not compatible on MacOS 14.0+ and won't launch. If you're on MacOS 14 or higher, you must go with After Effects 2022 or newer (2023,2024..)

- Starting in After Effects 2024, Adobe permanently removed the option to enable Rosetta meaning plugins only built for intel-macs are completely unusable in After Effects 2024 and higher, refer to plugin list below.

Enabling Rosetta can greatly drop performance, making it argubly not worth enabling for one or two plugins that you can easily substitute with something else.
<br><br>
### Plugin M1+ Compatibility (List) <span id="pcl"></span>
The following list is according to what is provided specifically on OUR site.

If you’re curious about a plugin that isn't mentioned, you can always look up the developer's release notes, see which version they added M1+ support for, and compare it with ours as versions are usually written in the file name.

#### Updated - (does not require Rosetta) <span id="udr"></span>
- BCC
- Crossphere Bokeh
- Deep Glow
- Dehancer
- Element 3D
- FilmConvert Nitrate
- Glitchify
- Magic Bullet Looks
- Modulation
- Omino
- Optical Flares
- Pixel Sorter
- RSMB
- Saber
- Sapphire
- Signal
- Trapcode
- Twixtor
- Universe
- VFX Suite
<span class="note">Scripts and extensions are unaffected.</span>
<br>
#### Not updated - (requires Rosetta) <span id="nrs"></span>
- Twitch (Video Copilot has not yet to release an M1+ update)
- Shooter Suite (Discontinued, also never recieved an M1+ update)

<span class="note">If you don't plan to use any of the "unsupported" plugins or agree that they are not worth the performance drop, then feel free to enjoy the latest versions of After Effects without any worry.</span>