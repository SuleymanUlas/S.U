import { Monitor } from 'os-monitor';
import express from 'express';
import puppeteer from 'puppeteer'
import inquirer from 'inquirer';
import natural from 'natural';
import SpellChecker from 'spellchecker';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { setTimeout } from 'timers/promises';
const apiKey = ''; const searchEngineId = '';
const mimes = [{ ext: '3dm', desc: 'Rhino 3D Model' }, { ext: '3dmf', desc: '3D Metafile' }, { ext: 'a', desc: 'Static Library' }, { ext: 'aab', desc: 'Authorware Binary' }, { ext: 'aam', desc: 'Authorware Map' }, { ext: 'aas', desc: 'Authorware Segment File' }, { ext: 'abc', desc: 'ABC Music Notation' }, { ext: 'acgi', desc: 'AOL HTML Gateway Index' }, { ext: 'afl', desc: 'Autocad Font Library' }, { ext: 'ai', desc: 'Adobe Illustrator Artwork' }, { ext: 'aif', desc: 'Audio Interchange File Format' }, { ext: 'aifc', desc: 'Compressed Audio Interchange File' }, { ext: 'aiff', desc: 'Audio Interchange File Format' }, { ext: 'aim', desc: 'AOL Instant Messenger' }, { ext: 'ani', desc: 'Windows Animated Cursor' }, { ext: 'aos', desc: 'Add-On Software' }, { ext: 'aps', desc: 'MS Office Assistant Pack' }, { ext: 'arc', desc: 'Archive' }, { ext: 'arj', desc: 'Archive' }, { ext: 'art', desc: 'Graphics (PFS:First Publisher)' }, { ext: 'asf', desc: 'Advanced Streaming Format' }, { ext: 'asm', desc: 'Assembler Source Code' }, { ext: 'asp', desc: 'Active Server Page' }, { ext: 'asx', desc: 'Microsoft ASF Redirector' }, { ext: 'au', desc: 'Audio File' }, { ext: 'avi', desc: 'Audio Video Interleave' }, { ext: 'avs', desc: 'Animation' }, { ext: 'bat', desc: 'Batch File' }, { ext: 'bcpio', desc: 'Binary CPIO Archive' }, { ext: 'bin', desc: 'Binary File' }, { ext: 'bmp', desc: 'Bitmap Image' }, { ext: 'boo', desc: 'Bookmark' }, { ext: 'book', desc: 'Document' }, { ext: 'boz', desc: 'Bzip Compressed Archive' }, { ext: 'bsh', desc: 'Bash Shell Script' }, { ext: 'bz', desc: 'Bzip Archive' }, { ext: 'bz2', desc: 'Bzip2 Compressed Archive' }, { ext: 'c', desc: 'C Source File' }, { ext: 'c++', desc: 'C++ Source File' },
{ ext: 'cab', desc: 'Windows Cabinet File' }, { ext: 'cat', desc: 'Security Catalog' }, { ext: 'cc', desc: 'C++ Source File' }, { ext: 'cdf', desc: 'NetCDF File' }, { ext: 'cer', desc: 'Certificate File' }, { ext: 'chm', desc: 'Compiled HTML Help File' }, { ext: 'class', desc: 'Java Class File' }, { ext: 'cmd', desc: 'Command Script' }, { ext: 'cmx', desc: 'Corel Metafile Exchange Image' }, { ext: 'com', desc: 'MS-DOS Application' }, { ext: 'conf', desc: 'Configuration File' }, { ext: 'cpp', desc: 'C++ Source File' }, { ext: 'cpt', desc: 'Corel Photo-Paint File' }, { ext: 'crl', desc: 'Certificate Revocation List' }, { ext: 'crt', desc: 'Security Certificate' }, { ext: 'csh', desc: 'C Shell Script' }, { ext: 'css', desc: 'Cascading Style Sheet' }, { ext: 'csv', desc: 'Comma Separated Values File' }, { ext: 'cxx', desc: 'C++ Source File' }, { ext: 'dcr', desc: 'Shockwave Media File' }, { ext: 'deb', desc: 'Debian Software Package' }, { ext: 'der', desc: 'DER Certificate File' }, { ext: 'dib', desc: 'Device Independent Bitmap Image' }, { ext: 'diff', desc: 'Patch File' }, { ext: 'dir', desc: 'Dial-up Networking Export File' }, { ext: 'dl', desc: 'Download File' }, { ext: 'dll', desc: 'Dynamic Link Library' }, { ext: 'doc', desc: 'MS Word Document' }, { ext: 'dot', desc: 'MS Word Document Template' }, { ext: 'drw', desc: 'Drawing' }, { ext: 'dtd', desc: 'Document Type Definition File' }, { ext: 'dvi', desc: 'Device Independent File' }, { ext: 'dwf', desc: 'Drawing Web File' }, { ext: 'dwg', desc: 'AutoCAD Drawing Database File' }, { ext: 'dxf', desc: 'Drawing Exchange Format File' }, { ext: 'dxr', desc: 'Director Movie' }, { ext: 'el', desc: 'Emacs Lisp File' }, { ext: 'elc', desc: 'Emacs Compiled Lisp File' }, { ext: 'emf', desc: 'Enhanced Windows Metafile' }, { ext: 'eml', desc: 'Email Message' },
{ ext: 'ent', desc: 'SGML Entity' }, { ext: 'eps', desc: 'Encapsulated PostScript File' }, { ext: 'epsf', desc: 'Encapsulated PostScript File' }, { ext: 'epsi', desc: 'Encapsulated PostScript Interchange File' }, { ext: 'etx', desc: 'Structure Enhanced (SE) Text' }, { ext: 'exe', desc: 'Executable File' }, { ext: 'f', desc: 'Fortran Source File' }, { ext: 'f77', desc: 'Fortran 77 Source File' }, { ext: 'f90', desc: 'Fortran 90 Source File' }, { ext: 'fdf', desc: 'Adobe Acrobat Form Data Format' }, { ext: 'fif', desc: 'Fractal Image Format' }, { ext: 'fig', desc: 'Figure' }, { ext: 'fits', desc: 'Flexible Image Transport System' }, { ext: 'flac', desc: 'Free Lossless Audio Codec File' }, { ext: 'fli', desc: 'FLIC Animation' }, { ext: 'flo', desc: 'Micrografx Flowchart' }, { ext: 'flv', desc: 'Flash Video File' }, { ext: 'fmf', desc: 'Fax File' }, { ext: 'for', desc: 'Fortran Source File' }, { ext: 'frm', desc: 'Form' }, { ext: 'fpx', desc: 'FlashPix Bitmap Image' }, { ext: 'fvi', desc: 'AutoCAD Film File' }, { ext: 'g3', desc: 'Group 3 Fax Image' }, { ext: 'gif', desc: 'Graphical Interchange Format File' }, { ext: 'gl', desc: 'Animation File' }, { ext: 'gsd', desc: 'General Station Description File' }, { ext: 'gsm', desc: 'Global System for Mobile Audio File' },
{ ext: 'gsp', desc: 'Gaia Sky Project File' }, { ext: 'gss', desc: 'Grid Software Service File' }, { ext: 'gtar', desc: 'GNU Tar Archive' }, { ext: 'gz', desc: 'Gnu Zipped Archive' }, { ext: 'h', desc: 'C Header File' }, { ext: 'hdf', desc: 'Hierarchical Data Format File' }, { ext: 'help', desc: 'Help File' }, { ext: 'hgl', desc: 'HP Graphics Language File' }, { ext: 'hh', desc: 'C++ Header File' }, { ext: 'hlb', desc: 'Clip Gallery Download Package' }, { ext: 'hlp', desc: 'Windows Help File' }, { ext: 'hqx', desc: 'BinHex 4.0 Encoded File' }, { ext: 'hta', desc: 'HTML Application' }, { ext: 'htc', desc: 'HTML Component' }, { ext: 'htm', desc: 'Hypertext Markup Language File' }, { ext: 'html', desc: 'Hypertext Markup Language File' }, { ext: 'htmls', desc: 'HTML Source Code File' }, { ext: 'htt', desc: 'Hypertext Template File' }, { ext: 'htx', desc: 'HTML Extension' }, { ext: 'ice', desc: 'ICE File' }, { ext: 'ico', desc: 'Icon File' }, { ext: 'ics', desc: 'Calendar File' }, { ext: 'idc', desc: 'Internet Database Connector File' }, { ext: 'ief', desc: 'Image Exchange Format File' }, { ext: 'iefs', desc: 'Image Exchange File Format' }, { ext: 'iges', desc: 'Initial Graphics Exchange Specification' }, { ext: 'igs', desc: 'Indigo Renderer Scene File' }, { ext: 'ima', desc: 'Disk Image' }, { ext: 'imap', desc: 'IMAP Settings File' }, { ext: 'inf', desc: 'Setup Information File' }, { ext: 'ins', desc: 'Internet Communication Settings' }, { ext: 'ip', desc: 'IconPackager Theme File' }, { ext: 'iso', desc: 'Disc Image File' }, { ext: 'isp', desc: 'IIS Internet Service Provider Settings' }, { ext: 'ist', desc: 'IStream Script' },
{ ext: 'jam', desc: 'Jam STAPL File' }, { ext: 'jar', desc: 'Java Archive File' }, { ext: 'java', desc: 'Java Source File' }, { ext: 'jfif', desc: 'JPEG File Interchange Format' }, { ext: 'jpe', desc: 'JPEG File' }, { ext: 'jpeg', desc: 'JPEG Image' }, { ext: 'jpg', desc: 'JPEG Image' }, { ext: 'jps', desc: 'Stereo JPEG Image' }, { ext: 'js', desc: 'JavaScript File' }, { ext: 'json', desc: 'JavaScript Object Notation File' }, { ext: 'jtf', desc: 'JPEG Tagged Interchange Format' }, { ext: 'kar', desc: 'Karaoke MIDI File' }, { ext: 'ksh', desc: 'Korn Shell Script' }, { ext: 'latex', desc: 'LaTeX Document' }, { ext: 'lha', desc: 'LH ARC Archive' }, { ext: 'lhx', desc: 'Lighting Analysis for Revit File' }, { ext: 'log', desc: 'Log File' }, { ext: 'lsp', desc: 'LISP Program Source Code' }, { ext: 'lzh', desc: 'LHA Archive' }, { ext: 'm', desc: 'Objective-C Implementation File' }, { ext: 'm1v', desc: 'MPEG-1 Video File' }, { ext: 'm2v', desc: 'MPEG-2 Video' }, { ext: 'm3u', desc: 'Media Playlist File' }, { ext: 'm4a', desc: 'MPEG-4 Audio File' }, { ext: 'm4v', desc: 'iTunes Video File' }, { ext: 'man', desc: 'Unix Manual' }, { ext: 'mdb', desc: 'MS Access Database' }, { ext: 'mde', desc: 'MS Access Add-In' }, { ext: 'mdf', desc: 'Media Disc Image File' }, { ext: 'mdz', desc: 'Access Wizard Template' }, { ext: 'me', desc: 'Readme Text File' }, { ext: 'mid', desc: 'MIDI File' }, { ext: 'midi', desc: 'MIDI File' }, { ext: 'mif', desc: 'Maker Interchange Format' }, { ext: 'mime', desc: 'Multi-Purpose Internet Mail Extension' }, { ext: 'mjf', desc: 'AT&T MJPEG File' }, { ext: 'mjpg', desc: 'Motion JPEG File' }, { ext: 'mm', desc: 'Macro Media Flash Player File' }, { ext: 'mme', desc: 'MIDI Music' }, { ext: 'mod', desc: 'Music Module File' }, { ext: 'moov', desc: 'Apple QuickTime Movie' }, { ext: 'mov', desc: 'Apple QuickTime Movie' }, { ext: 'movie', desc: 'QuickTime Movie' }, { ext: 'mp2', desc: 'MPEG Layer II Compressed Audio File' }, { ext: 'mp3', desc: 'MP3 Audio File' }, { ext: 'mp4', desc: 'MPEG-4 Video File' }, { ext: 'mpa', desc: 'MPEG-2 Audio File' },
{ ext: 'mpd', desc: 'Access database of a macro' }, { ext: 'mpe', desc: 'MPEG Movie File' },
{ ext: 'mpeg', desc: 'MPEG Movie' }, { ext: 'mpg', desc: 'MPEG Video File' }, { ext: 'mpga', desc: 'MPEG Audio File' }, { ext: 'mpp', desc: 'Microsoft Project file' }, { ext: 'mps', desc: 'Mime Part file' }, { ext: 'mpp', desc: 'Microsoft Project File' }, { ext: 'mpt', desc: 'MPT File' }, { ext: 'mpv', desc: 'MPEG Elementary Stream Video File' }, { ext: 'mpv2', desc: 'MPEG-2 Video Stream' }, { ext: 'mpw', desc: 'Memopad Data' }, { ext: 'mpx', desc: 'Compiled FoxPro Menu' },
{ ext: 'msg', desc: 'Message File' }, { ext: 'msh', desc: 'Microsoft Shell File' }, { ext: 'msi', desc: 'Microsoft Installer Package' },
{ ext: 'msp', desc: 'Windows Installer Patch' }, { ext: 'mso', desc: 'Office Macro File' }, { ext: 'm3d', desc: 'Macro 3D Document' }, { ext: 'mso', desc: 'XML Macros' }, { ext: 'msu', desc: 'Microsoft Update Standalone Package' }, { ext: 'mvb', desc: 'Multimedia Viewer Book Source File' }, { ext: 'mv', desc: 'Movie File' }, { ext: 'mwf', desc: 'Windows Media Metafile' }, { ext: 'mws', desc: 'Maple Worksheet File' }, { ext: 'mxc', desc: 'Maus X Copy File' }, { ext: 'mxl', desc: 'Compressed MusicXML File' }, { ext: 'mxmf', desc: 'Mobile XMF Ringtone File' }, { ext: 'n3', desc: 'Nokia Phone Backup File' }, { ext: 'nb', desc: 'Mathematica Notebook File' }, { ext: 'nc', desc: 'Network Common Data Form File' }, { ext: 'ndb', desc: 'Alpha Five Database File' }, { ext: 'ndf', desc: 'SQL Server Secondary Database File' }, { ext: 'ndx', desc: 'dBASE Index File' }, { ext: 'nef', desc: 'Nikon Electronic Format RAW Image' }, { ext: 'nfo', desc: 'Text File' }, { ext: 'ng', desc: 'Chart File' }, { ext: 'ngc', desc: 'Compiled Simulation Model' }, { ext: 'nif', desc: 'Gamebryo Model File' }, { ext: 'nix', desc: 'Nix Package Manager Script' }, { ext: 'nsc', desc: 'Nero ShowTime File' }, { ext: 'nsf', desc: 'NES Sound Format File' }, { ext: 'nws', desc: 'Windows Live Mail Newsgroup Copy' }, { ext: 'o', desc: 'Object File' }, { ext: 'obj', desc: 'Wavefront 3D Object File' }, { ext: 'oda', desc: 'Office Document Architecture File' }, { ext: 'odb', desc: 'OpenDocument Database' }, { ext: 'odc', desc: 'OpenDocument Chart' }, { ext: 'odf', desc: 'Open Document Format' }, { ext: 'odg', desc: 'OpenDocument Graphic File' }, { ext: 'odi', desc: 'OpenDocument Image' }, { ext: 'odm', desc: 'OpenDocument Master Document' }, { ext: 'odp', desc: 'OpenDocument Presentation' }, { ext: 'ods', desc: 'OpenDocument Spreadsheet' }, { ext: 'odt', desc: 'OpenDocument Text Document' }, { ext: 'oga', desc: 'Ogg Vorbis Audio File' }, { ext: 'ogg', desc: 'Ogg Vorbis Audio File' }, { ext: 'ogv', desc: 'Ogg Video File' }, { ext: 'ogx', desc: 'Ogg Vorbis Multiplexed Media File' }, { ext: 'one', desc: 'OneNote Document' }, { ext: 'onepkg', desc: 'OneNote Package File' },
{ ext: 'onetoc2', desc: 'OneNote Table of Contents File' }, { ext: 'opf', desc: 'Open Packaging Format File' }, { ext: 'oprc', desc: 'Opera Web Browser Speed Dial' }, { ext: 'ora', desc: 'OpenRaster Image File' }, { ext: 'orf', desc: 'Olympus RAW File' }, { ext: 'otf', desc: 'OpenType Font' }, { ext: 'otg', desc: 'OpenDocument Graphic Template' }, { ext: 'oth', desc: 'OpenDocument HTML Document Template' }, { ext: 'otp', desc: 'OpenDocument Presentation Template' }, { ext: 'ots', desc: 'OpenDocument Spreadsheet Template' }, { ext: 'ott', desc: 'OpenDocument Document Template' }, { ext: 'ova', desc: 'Open Virtual Appliance' }, { ext: 'ovf', desc: 'Open Virtualization File' }, { ext: 'owl', desc: 'Web Ontology Language File' }, { ext: 'p10', desc: 'Certificate Request File' }, { ext: 'p12', desc: 'Personal Information Exchange File' }, { ext: 'p7b', desc: 'PKCS #7 Certificate File' }, { ext: 'p7c', desc: 'PKCS #7 Certificate File' }, { ext: 'p7m', desc: 'PKCS #7 Encrypted Message' }, { ext: 'p7r', desc: 'Certificate Request Response File' }, { ext: 'p7s', desc: 'PKCS #7 Digital Signature File' }, { ext: 'pac', desc: 'Proxy Auto-Configuration File' }, { ext: 'pas', desc: 'Pascal Source File' }, { ext: 'pat', desc: 'Pattern File' }, { ext: 'pbm', desc: 'Portable Bitmap Image' }, { ext: 'pcd', desc: 'Kodak Photo CD Image File' }, { ext: 'pcf', desc: 'Bitmap Font File' }, { ext: 'pcl', desc: 'Printer Command Language Document' }, { ext: 'pct', desc: 'Picture File' }, { ext: 'pcx', desc: 'Paintbrush Bitmap Image File' }, { ext: 'pdb', desc: 'Program Database' }, { ext: 'pdf', desc: 'Portable Document Format File' }, { ext: 'pfa', desc: 'PostScript Type 1 Font ASCII' }, { ext: 'pfb', desc: 'PostScript Type 1 Font Binary' }, { ext: 'pfm', desc: 'Printer Font Metrics File' }, { ext: 'pfx', desc: 'PKCS #12 Certificate File' }, { ext: 'pgm', desc: 'Portable Gray Map Image' }, { ext: 'pgp', desc: 'Pretty Good Privacy Public Key File' }, { ext: 'php', desc: 'PHP Source Code File' }, { ext: 'pict', desc: 'Picture File' }, { ext: 'pif', desc: 'Program Information File' }, { ext: 'pkg', desc: 'Mac OS X Installer Package' },
{ ext: 'pl', desc: 'Perl Script' }, { ext: 'plc', desc: 'PL/B Source File' }, { ext: 'plf', desc: 'AutoCAD Plotter Document File' }, { ext: 'pm', desc: 'Perl Module' }, { ext: 'pm4', desc: 'PageMaker 4 Document' }, { ext: 'pm5', desc: 'PageMaker 5.0 Document' }, { ext: 'png', desc: 'Portable Network Graphic' }, { ext: 'pnm', desc: 'Portable Any Map Image' }, { ext: 'pot', desc: 'PowerPoint Template' }, { ext: 'potx', desc: 'PowerPoint Open XML Presentation Template' }, { ext: 'ppa', desc: 'PowerPoint Add-in' }, { ext: 'ppam', desc: 'PowerPoint 2007 Add-In' }, { ext: 'ppm', desc: 'Portable Pixmap Image' }, { ext: 'pps', desc: 'PowerPoint Slide Show' }, { ext: 'ppsm', desc: 'PowerPoint 2007 Macro-Enabled Presentation' }, { ext: 'ppsx', desc: 'PowerPoint Open XML Slide Show' }, { ext: 'ppt', desc: 'PowerPoint Presentation' }, { ext: 'pptm', desc: 'PowerPoint 2007 Macro-Enabled Presentation' }, { ext: 'pptx', desc: 'PowerPoint Open XML Presentation' }, { ext: 'prc', desc: 'Mobipocket eBook File' }, { ext: 'prel', desc: 'Premiere Elements Project File' }, { ext: 'prf', desc: 'Outlook Profile File' }, { ext: 'prt', desc: 'Part File' }, { ext: 'ps', desc: 'PostScript File' }, { ext: 'psd', desc: 'Adobe Photoshop Document' }, { ext: 'psp', desc: 'PaintShop Pro Image File' }, { ext: 'pub', desc: 'Publisher Document' }, { ext: 'pvb', desc: '3D Home Architect Project Backup' }, { ext: 'pvl', desc: 'Instalit Library File' }, { ext: 'pvm', desc: 'Photo Video Manifest File' }, { ext: 'pwz', desc: 'PowerPoint Wizard File' }, { ext: 'py', desc: 'Python Script' }, { ext: 'pyc', desc: 'Python Compiled File' }, { ext: 'pyo', desc: 'Python Optimized Code' }, { ext: 'pyw', desc: 'Python GUI Script' }, { ext: 'qt', desc: 'Apple QuickTime Movie' }, { ext: 'qtm', desc: 'Apple QuickTime Movie' }, { ext: 'qtz', desc: 'Apple Quartz Composer File' }, { ext: 'qxd', desc: 'QuarkXPress Document' }, { ext: 'ra', desc: 'Real Audio File' }, { ext: 'ram', desc: 'Real Audio Metadata File' }, { ext: 'rar', desc: 'WinRAR Compressed Archive' }, { ext: 'ras', desc: 'Sun Raster Graphic' }, { ext: 'rat', desc: 'RATDVD Disk Image' }, { ext: 'rc', desc: 'Resource Script' },
{ ext: 'rdf', desc: 'Resource Description Framework File' }, { ext: 'rdo', desc: 'Real Draw Pro File' }, { ext: 'rec', desc: 'Data File' }, { ext: 'reg', desc: 'Registry Data File' }, { ext: 'rgb', desc: 'RGB Bitmap' }, { ext: 'rm', desc: 'Real Media File' }, { ext: 'rmi', desc: 'RMID MIDI File' }, { ext: 'rmp', desc: 'RealPlayer Plugin' }, { ext: 'rmvb', desc: 'RealMedia Variable Bit Rate File' }, { ext: 'rom', desc: 'N64 Game ROM File' }, { ext: 'rpm', desc: 'Red Hat Package Manager File' }, { ext: 'rss', desc: 'Rich Site Summary' }, { ext: 'rtf', desc: 'Rich Text Format File' }, { ext: 'rtx', desc: 'Rich Text Document' }, { ext: 'rv', desc: 'Real Video File' }, { ext: 'rvt', desc: 'Revit Project File' }, { ext: 's', desc: 'Assembly Source Code File' }, { ext: 's3m', desc: 'ScreamTracker 3 Module' }, { ext: 'sav', desc: 'Saved Game' }, { ext: 'sbf', desc: 'Swing Binary File' }, { ext: 'scm', desc: 'Scheme Source Code File' }, { ext: 'scr', desc: 'Windows Screensaver' }, { ext: 'script', desc: 'Generic Script File' }, { ext: 'sct', desc: 'Windows Scriptlet' }, { ext: 'sd2', desc: 'Sound Designer II File' }, { ext: 'sda', desc: 'StarOffice Drawing' }, { ext: 'sdc', desc: 'StarOffice Calc' }, { ext: 'sdd', desc: 'StarOffice Presentation' }, { ext: 'sdp', desc: 'Session Description Protocol File' }, { ext: 'sdr', desc: 'SmartDraw Drawing File' }, { ext: 'sds', desc: 'OpenOffice.org Chart' }, { ext: 'sdw', desc: 'StarOffice Writer Text Document' }, { ext: 'sea', desc: 'Self-Extracting Archive' }, { ext: 'set', desc: 'Settings File' }, { ext: 'sgf', desc: 'Smart Game Format File' }, { ext: 'sgl', desc: 'StarOffice Writer Master Document' }, { ext: 'sgml', desc: 'Standard Generalized Markup Language File' }, { ext: 'sh', desc: 'Bash Shell Script' }, { ext: 'sh3', desc: 'Presentation' }, { ext: 'shar', desc: 'Unix Shar Archive' }, { ext: 'shtml', desc: 'Server Side Include HTML File' }, { ext: 'sid', desc: 'SID Audio File' }, { ext: 'silo', desc: 'Mesh Data File' }, { ext: 'sit', desc: 'StuffIt Archive' }, { ext: 'skd', desc: 'SketchUp Backup Document' }, { ext: 'skp', desc: 'SketchUp Document' }, { ext: 'skt', desc: 'SketchUp Plugin' }, { ext: 'sl', desc: 'Source Library' }, { ext: 'smf', desc: 'Standard MIDI File' },
{ ext: 'smi', desc: 'Self-Mounting Disk Image' }, { ext: 'smil', desc: 'SMIL Presentation' }, { ext: 'snd', desc: 'Sound File' }, { ext: 'so', desc: 'Shared Library' }, { ext: 'spc', desc: 'Software Publisher Certificate File' }, { ext: 'spl', desc: 'Windows System File' }, { ext: 'sql', desc: 'Structured Query Language Data File' }, { ext: 'src', desc: 'Source Code' }, { ext: 'srt', desc: 'SubRip Subtitle File' }, { ext: 'ssf', desc: 'Structured Storage File' }, { ext: 'stc', desc: 'OpenOffice.org Presentation Template' }, { ext: 'std', desc: 'OpenOffice.org Drawing Template' }, { ext: 'sti', desc: 'StarOffice Presentation Template' }, { ext: 'stl', desc: 'Stereolithography File' }, { ext: 'stm', desc: 'Exchange Streaming Media File' }, { ext: 'stw', desc: 'StarOffice Document Template' }, { ext: 'sty', desc: 'LaTeX Style' }, { ext: 'sv4cpio', desc: 'System V Release 4 CPIO Archive' }, { ext: 'sv4crc', desc: 'System V Release 4 Checksum File' }, { ext: 'svg', desc: 'Scalable Vector Graphics File' }, { ext: 'svh', desc: 'SystemVerilog Source Code Header File' }, { ext: 'swf', desc: 'Shockwave Flash Movie' }, { ext: 'swfl', desc: 'Flash Source File' }, { ext: 'swt', desc: 'Flash Generator Template' }, { ext: 'sxc', desc: 'StarOffice Calc Spreadsheet' }, { ext: 'sxd', desc: 'StarOffice Drawing' }, { ext: 'sxg', desc: 'Apache OpenOffice Master Document' }, { ext: 'sxi', desc: 'StarOffice Impress Presentation' }, { ext: 'sxm', desc: 'StarMath Formula' }, { ext: 'sxw', desc: 'StarOffice Writer Document' }, { ext: 't', desc: 'Turing Source File' }, { ext: 'tar', desc: 'Consolidated Unix File Archive' }, { ext: 'taz', desc: 'Tar Zipped File' }, { ext: 'tbk', desc: 'ToolBook File' }, { ext: 'tcl', desc: 'Tcl Script' }, { ext: 'tex', desc: 'LaTeX Source Document' }, { ext: 'texi', desc: 'GNU Texinfo Document' }, { ext: 'texinfo', desc: 'GNU Texinfo Document' }, { ext: 'tgz', desc: 'Gzipped Tar File' }, { ext: 'thmx', desc: 'Office 2007 Theme File' }, { ext: 'tif', desc: 'Tagged Image File' }, { ext: 'tiff', desc: 'Tagged Image File Format' }, { ext: 'tk', desc: 'Toolkit Script File' }, { ext: 'tlz', desc: 'Tar LZMA Compressed File' }, { ext: 'tnef', desc: 'Transport Neutral Encapsulation Format' }, { ext: 'toc', desc: 'Table of Contents' },
{ ext: 'trm', desc: 'Terminal Settings' }, { ext: 'ts', desc: 'TypeScript File' }, { ext: 'tsv', desc: 'Tab Separated Values File' }, { ext: 'ttf', desc: 'TrueType Font' }, { ext: 'txt', desc: 'Plain Text File' }, { ext: 'u3d', desc: 'Universal 3D File' }, { ext: 'udeb', desc: 'Debian Package File' }, { ext: 'udf', desc: 'Universal Disk Format File' }, { ext: 'udl', desc: 'Microsoft Data Link' }, { ext: 'url', desc: 'Internet Shortcut' }, { ext: 'ustar', desc: 'Uniform Standard Tape Archive Format' }, { ext: 'vb', desc: 'VBScript File' }, { ext: 'vbe', desc: 'VBScript Encoded Script File' }, { ext: 'vbs', desc: 'VBScript File' }, { ext: 'vcd', desc: 'Virtual CD' }, { ext: 'vcf', desc: 'vCard File' }, { ext: 'vcs', desc: 'vCalendar Event File' }, { ext: 'vda', desc: 'Targa Bitmap Image File' }, { ext: 'vdi', desc: 'VirtualBox Virtual Disk Image' }, { ext: 'vdx', desc: 'Visio Drawing XML File' }, { ext: 'vob', desc: 'DVD Video Object File' }, { ext: 'voc', desc: 'Sound File' }, { ext: 'vor', desc: 'StarOffice Template' }, { ext: 'vox', desc: 'Vox Audio File' }, { ext: 'vss', desc: 'Visio Stencil' }, { ext: 'vst', desc: 'Visio Drawing Template' }, { ext: 'vsw', desc: 'Visio Workspace File' }, { ext: 'vxd', desc: 'Virtual Device Driver' }, { ext: 'wav', desc: 'WAVE Audio File' }, { ext: 'wb1', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wb2', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wb3', desc: 'Quattro Pro for Windows Spreadsheet' }, { ext: 'wbmp', desc: 'Wireless Bitmap Image' }, { ext: 'wcm', desc: 'Webex Saved Chat Session' }, { ext: 'wdb', desc: 'Microsoft Works Database' }, { ext: 'wdl', desc: 'Worldlabel.com Blank Label File' }, { ext: 'webarchive', desc: 'Safari Web Archive' }, { ext: 'webm', desc: 'WebM Video File' }, { ext: 'webp', desc: 'WebP Image' }, { ext: 'wgz', desc: 'WordGrid Puzzle File' }, { ext: 'wim', desc: 'Windows Imaging Format File' }, { ext: 'wk1', desc: 'Lotus Worksheet File' }, { ext: 'wk3', desc: 'Lotus 1-2-3 Spreadsheet' }, { ext: 'wk4', desc: 'Lotus 1-2-3 Spreadsheet' }, { ext: 'wks', desc: 'Works Spreadsheet' }, { ext: 'wlmp', desc: 'Windows Live Movie Maker Project File' }, { ext: 'wm', desc: 'Windows Media File' }, { ext: 'wma', desc: 'Windows Media Audio File' }, { ext: 'wmd', desc: 'Windows Media Download Package' }, { ext: 'wmf', desc: 'Windows Metafile' },
{ ext: 'wml', desc: 'Wireless Markup Language File' }, { ext: 'wmv', desc: 'Windows Media Video File' }, { ext: 'wmx', desc: 'Windows Media Redirector File' }, { ext: 'wmz', desc: 'Windows Media Compressed Skin File' }, { ext: 'wp', desc: 'WordPerfect Document' }, { ext: 'wp4', desc: 'WordPerfect 4 Document' }, { ext: 'wp5', desc: 'WordPerfect 5 Document' }, { ext: 'wpd', desc: 'WordPerfect Document' }, { ext: 'wpg', desc: 'WordPerfect Graphic' }, { ext: 'wpl', desc: 'Windows Media Player Playlist' }, { ext: 'wps', desc: 'Microsoft Works Word Processor Document' }, { ext: 'wri', desc: 'Microsoft Write Document' }, { ext: 'wrz', desc: 'Compressed VRML File' }, { ext: 'wsc', desc: 'Windows Script Component' }, { ext: 'wsf', desc: 'Windows Script File' }, { ext: 'wsh', desc: 'Windows Script Host Settings File' }, { ext: 'wsz', desc: 'Winamp Classic Skin' }, { ext: 'wvx', desc: 'Windows Media Video Redirector' }, { ext: 'x', desc: 'DirectX Model File' }, { ext: 'x3f', desc: 'SIGMA X3F Camera RAW File' }, { ext: 'xaf', desc: '3ds Max XML Animation File' }, { ext: 'xbm', desc: 'X11 Bitmap Graphic' }, { ext: 'xcf', desc: 'GIMP Image File' }, { ext: 'xhtml', desc: 'Extensible Hypertext Markup Language File' }, { ext: 'xla', desc: 'Excel Add-In File' }, { ext: 'xlam', desc: 'Excel Open XML Macro-Enabled Add-In' }, { ext: 'xlb', desc: 'Excel Toolbar File' }, { ext: 'xlc', desc: 'Excel Chart' }, { ext: 'xld', desc: 'Excel Database File' }, { ext: 'xlk', desc: 'Excel Backup File' }, { ext: 'xll', desc: 'Excel Add-In File' }, { ext: 'xlm', desc: 'Excel Macro File' }, { ext: 'xls', desc: 'Excel Spreadsheet' }, { ext: 'xlsb', desc: 'Excel Binary Spreadsheet' }, { ext: 'xlsm', desc: 'Excel Macro-Enabled Workbook' }, { ext: 'xlsx', desc: 'Excel Open XML Spreadsheet' }, { ext: 'xlt', desc: 'Excel Template' }, { ext: 'xltm', desc: 'Excel Open XML Macro-Enabled Spreadsheet Template' }, { ext: 'xltx', desc: 'Excel Open XML Spreadsheet Template' }, { ext: 'xlw', desc: 'Excel Workbook' }, { ext: 'xm', desc: 'FastTracker 2 Extended Module' }, { ext: 'xmind', desc: 'XMind Workbook File' }, { ext: 'xml', desc: 'XML File' }, { ext: 'xmp', desc: 'Extensible Metadata Platform File' }, { ext: 'xmt', desc: 'Compressed Xbox Game Model' }, { ext: 'xof', desc: 'Reality Lab 3D Image File' }, { ext: 'xpm', desc: 'X11 Pixmap Graphic' },
{ ext: 'xps', desc: 'XML Paper Specification File' }, { ext: 'xsf', desc: 'Game Data File' }, { ext: 'xsn', desc: 'InfoPath Form Template' }, { ext: 'xspf', desc: 'XSPF Playlist File' },
{ ext: 'xul', desc: 'XUL File' }, { ext: 'xwd', desc: 'X Windows Dump Image' }, { ext: 'xyz', desc: 'Celestia Script File' }, { ext: 'xz', desc: 'XZ Compressed Archive' }, { ext: 'y', desc: 'Yacc Source File' }, { ext: 'yaml', desc: 'YAML Document' }, { ext: 'yml', desc: 'YAML Document' }, { ext: 'yps', desc: 'Yahoo! Messenger Data File' }, { ext: 'z', desc: 'Unix Compressed File' }, { ext: 'z64', desc: 'Nintendo 64 ROM File' }, { ext: 'zap', desc: 'ZoneAlarm Pro Data File' }, { ext: 'zip', desc: 'Zipped File' }, { ext: 'zipx', desc: 'Extended Zip File' }, { ext: 'zl9', desc: 'ZoneAlarm Mailsafe Renamed Zip File' }, { ext: 'zpl', desc: 'Zune Playlist' }, { ext: 'zpl2', desc: 'Zune Playlist' }, { ext: 'zz', desc: 'Zzip Compressed Archive' }];
const elementsList = [
  "a",        // <a> - hyperlink
  "abbr",     // <abbr> - abbreviation
  "address",  // <address> - contact information
  "area",     // <area> - image map area
  "article",  // <article> - independent content
  "aside",    // <aside> - side content
  "audio",    // <audio> - audio content
  "b",        // <b> - bold text
  "base",     // <base> - base URL
  "bdi",      // <bdi> - bidirectional isolation
  "bdo",      // <bdo> - bidirectional override
  "blockquote", // <blockquote> - block quotation
  "body",     // <body> - document body
  "br",       // <br> - line break
  "button",   // <button> - clickable button
  "canvas",   // <canvas> - drawing area
  "caption",  // <caption> - table caption
  "cite",     // <cite> - reference
  "code",     // <code> - code snippet
  "col",      // <col> - column in a table
  "colgroup", // <colgroup> - group of columns
  "data",     // <data> - machine-readable data
  "datalist", // <datalist> - predefined options
  "dd",       // <dd> - description details
  "del",      // <del> - deleted text
  "details",  // <details> - additional details
  "dialog",   // <dialog> - dialog box
  "div",      // <div> - section
  "dl",       // <dl> - description list
  "dt",       // <dt> - term in a description list
  "em",       // <em> - emphasized text
  "embed",    // <embed> - embedded content
  "fieldset", // <fieldset> - group of related elements
  "figcaption", // <figcaption> - caption for a figure
  "figure",   // <figure> - self-contained content
  "footer",   // <footer> - footer for a section
  "form",     // <form> - form for user input
  "h1", "h2", "h3", "h4", "h5", "h6", // Headings
  "head",     // <head> - document metadata
  "header",   // <header> - header for a section
  "hr",       // <hr> - horizontal rule
  "html",     // <html> - HTML document
  "i",        // <i> - italic text
  "iframe",   // <iframe> - inline frame
  "img",      // <img> - image
  "input",    // <input> - user input field
  "ins",      // <ins> - inserted text
  "kbd",      // <kbd> - keyboard input
  "label",    // <label> - label for an input
  "legend",   // <legend> - caption for a fieldset
  "li",       // <li> - list item
  "link",     // <link> - external resource link
  "main",     // <main> - main content
  "map",      // <map> - image map
  "mark",     // <mark> - highlighted text
  "meta",     // <meta> - metadata
  "meter",    // <meter> - measurement
  "nav",      // <nav> - navigation links
  "noscript", // <noscript> - alternative content
  "object",   // <object> - embedded object
  "ol",       // <ol> - ordered list
  "optgroup", // <optgroup> - group of options
  "option",   // <option> - option in a select list
  "p",        // <p> - paragraph
  "param",    // <param> - parameter for an object
  "picture",   // <picture> - responsive image
  "pre",      // <pre> - preformatted text
  "progress", // <progress> - progress indicator
  "q",        // <q> - short quotation
  "rb",       // <rb> - ruby base
  "rp",       // <rp> - ruby parentheses
  "rt",       // <rt> - ruby text
  "rtc",      // <rtc> - ruby text container
  "s",        // <s> - strikethrough text
  "samp",     // <samp> - sample output
  "script",   // <script> - script
  "section",  // <section> - thematic grouping
  "select",   // <select> - dropdown list
  "small",    // <small> - small text
  "source",   // <source> - media source
  "span",     // <span> - inline section
  "strong",   // <strong> - strong importance
  "style",    // <style> - CSS styles
  "sub",      // <sub> - subscript
  "summary",  // <summary> - summary of a details element
  "sup",      // <sup> - superscript
  "table",    // <table> - table
  "tbody",    // <tbody> - table body
  "td",       // <td> - table cell
  "textarea", // <textarea> - multi-line text input
  "tfoot",    // <tfoot> - table footer
  "th",       // <th> - table header cell
  "thead",    // <thead> - table header
  "time",     // <time> - time or date
  "title",    // <title> - document title
  "tr",       // <tr> - table row
  "track",    // <track> - text tracks for media
  "u",        // <u> - underline text
  "ul",       // <ul> - unordered list
  "var",      // <var> - variable
  "video",    // <video> - video content
  "wbr"       // <wbr> - word break opportunity
];
/**     '""""""""""""""""""""'       

*?        e═-a «     ─▄ww⌐  ─~        
*?
*?       ▓',  ²M      ▐''[   ]▌       
*?
*?       `*''╖µ       ▐''[   ]▌       
*?
*?           ";'┐     ▐,'[   ]▌       
*?
*?       ▌µ   ▐,  xk  └▌,╕  ,#        
*?
*?       `        `      `            
*?
        `````````````````````  
 */
let email = 'test@mail.com';
function Q() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'question',
        message: 'Question (type "exit" to quit):'
      }
    ])
    .then((answers) => { 
      if (answers.question.toLowerCase() === 'exit') {
        console.log('Exiting...');
        return;
      }

      const query = new UI_SU();
      query.AI(answers.question, 'test@mail.com').then(() => {
      }).catch((error) => {
        console.error('Error:', error);
        Q();
      });
    });
}
Q();
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const day = time.getDate();
const folderName = `./User/${email}/SuperUser`;
const fileName = `./User/${email}/SuperUser/${year}_${month}_${day}/memory.sup`;
class UI_SU {
  async Monitor() {
    const monitor = new Monitor();
    // basic usage
    monitor.start();
    // define handler that will always fire every cycle
    monitor.on('monitor', (event) => {
      console.log(event.type, 'This event always happens on each monitor cycle!');
    });
    // define handler for a too high 1-minute load average
    monitor.on('loadavg1', (event) => {
      console.log(event.type, 'Load average is exceptionally high!');
    });
    // define handler for a too low free memory
    monitor.on('freemem', (event) => {
      console.log(event.type, 'Free memory is very low!');
    });
    // define a throttled handler
    monitor.throttle('loadavg5', (event) => {
      // whatever is done here will not happen
      // more than once every 5 minutes(300000 ms)

    }, monitor.minutes(5));
    // change config while monitor is running
    monitor.config({
      freemem: 0.3 // alarm when 30% or less free memory available
    });
    // stop monitor
    monitor.stop();
    // check whether monitor is running or not
    monitor.isRunning(); // -> true / false
    // use as readable stream
    monitor.start({ stream: true }).pipe(process.stdout);
  }
  async AI(s, email) {
    if (s && email) {
      let Maxquery = 3;
      let DataSU = [];
      let returnedOrginal = '';
      let autoquery = s.replace(/\n/g, '');
      const emailRegex = /email\+([^+]+)\+txt/g;
      autoquery = autoquery.replace(emailRegex, (match, emailtxt) => {
        email = emailtxt;
        return '';
      });
      await this.createDirectories(email, folderName);

      const filename = await this.getFiles(`./User/${email}/SuperUser`);
      await this.readData(filename, email, DataSU);

      await this.processQuery(autoquery, returnedOrginal, email, DataSU, Maxquery, s);
    }
  }

  async createDirectories(email, folderName) {
    if (!fs.existsSync('./User')) fs.mkdirSync('./User');
    if (!fs.existsSync(`./User/${email}`)) {
      fs.mkdirSync(`./User/${email}`);
      console.log(`\x1b[32mFolder "${email}" created successfully!\x1b[0m`);
    }
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
      console.log(`\x1b[32mFolder "${folderName}" created successfully!\x1b[0m`);
    }
  }

  async getFiles(dir) {
    const files = await fsp.readdir(dir);
    return files.map(file => path.parse(file).name);
  }

  async readData(filename, email, DataSU) {
    for (const file of filename) {
      try {
        const dataUsed = await fsp.readFile(`./User/${email}/SuperUser/${file}/memory.sup`, 'utf-8');
        DataSU.push(dataUsed);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async processQuery(autoquery, returnedOrginal, email, DataSU, Maxquery, s) {
    returnedOrginal = s;
    let question = returnedOrginal;

    if (question.startsWith('--notfix--')) {
      question = question.replace(/--notfix--/g, '');
      return this.auto(question, email, DataSU, Maxquery);
    }

    const isMisspelled = SpellChecker.isMisspelled(question);
    if (isMisspelled) {
      question = this.correctSpelling(question);
      console.log(`\x1b[32mFixed: ${question}\x1b[0m`);
    }

    await this.auto(question.toLowerCase().replace(/\s+/g, ' '), email, DataSU, Maxquery);
  }

  correctSpelling(question) {
    let expressionOK = '';
    const expression = question.split(" ");
    expression.forEach((expF) => {
      const fix = SpellChecker.isMisspelled(expF)
        ? SpellChecker.getCorrectionsForMisspelling(expF)[0]
        : expF;
      expressionOK += ` ${fix}`;
    });
    return expressionOK.trim();
  }

  async auto(queryAuto, email, DataSU, Maxquery) {
    const queryRegex = new RegExp(`Query:⁂${queryAuto}⁂Reply:⁂([^⁂]+)⁂`, 'g');
    const dataEngineer = await fsp.readFile(`${fileName}`, 'utf8').catch(err => {
      console.error('Memory error!', err);
      return '';
    });
    if (queryRegex.test(dataEngineer)) {
      const matchedTexts = [];
      dataEngineer.replace(queryRegex, (match, replys) => {
        matchedTexts.push(replys);
        return match;
      });
      const randomIndex = Math.floor(Math.random() * matchedTexts.length);
      const selectedText = matchedTexts[randomIndex];
      Maxquery -= 1;
      if (Maxquery > 0) {
        console.log(`\x1b[32m${selectedText}\x1b[0m`);
      }
    }
    else if (queryRegex.test(DataSU)) {
      const matchedTexts = []; let DataS = DataSU.toString();
      DataS.replace(queryRegex, (match, replys) => { matchedTexts.push(replys); return match; });
      const randomIndex = Math.floor(Math.random() * matchedTexts.length); const selectedText = matchedTexts[randomIndex]; Maxquery = Maxquery - 1;
      if (Maxquery != 0) { console.log(`\x1b[32m${selectedText}\x1b[0m`); console.log(`\x1b[36m${selectedText}\x1b[0m`); }
    } 
    else if (queryAuto.startsWith('Element')) {
      const eregex = /Element:([^+]+)\+Setting:([^+]+)\+Search:(.+)/g;
      queryAuto.replace(eregex, (match, element, setting, search) => {
        const go = new Bootfunc; go.GoogleExample(search, element, setting);
      });
    }
    else {
      SU_Dep(queryAuto, DataSU);
    }
  }
}
class Bootfunc {
  File(SearchF) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchF}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var { items } = data;
        try {
          async function lettry() {
            let allLinks = [];
            const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage(); var length = items.length;
            for (var i = 0; i < length; i++) {
              try { var link = items[i].link; await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 10000 }); page.setDefaultNavigationTimeout(0); const hrefsOnPage = await page.$$eval('a', anchors => anchors.map(a => a.href)); allLinks.push(...hrefsOnPage); } catch { }
            }
            let strLink = '';
            for (var i = 0; i < allLinks.length; i++) {
              strLink = allLinks[i];
              const linkRegex = /\.([a-zA-Z0-9]+)$/g;
              if (strLink.match(linkRegex)) {
                strLink.replace(linkRegex, (match, one) => {
                  for (var i = 0; i < mimes.length; i++) {
                    if (mimes[i].ext == one) {
                      const reply = `Filenodefetchxqx:304++${strLink}\n${mimes[i].desc}`;
                      console.log(reply)
                    }
                  }
                });
              }
            }
            await browser.close();
          } lettry();
        } catch { }
      });
  }
  async GoogleExample(SearchG, Element, Setting) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchG}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const { items } = data;

      if (data && Array.isArray(items) && items.length > 0) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        let result = [];
        for (let i = 0; i < items.length; i++) {
          const link = items[i].link;
          if (!link) continue;
          await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 0 });
          const elementExists = await page.$(Element);
          if (!elementExists) {
            result = 'error!';
            continue;
          }
          switch (Setting) {
            case "html":
              const htmlResults = await page.$$eval(Element, el => el.map(element => element.innerHTML));
              result.push(...htmlResults.map(item => item));
              break;

            case "text":
              const textResults = await page.$$eval(Element, el => el.map(element => element.innerText));
              result.push(...textResults.map(item => item));
              break;

            case "src":
              const srcResults = await page.$$eval(Element, el => el.map(element => element.src));
              result.push(...srcResults.map(item => item));
              break;

            case "href":
              const hrefResults = await page.$$eval(Element, el => el.map(element => element.href));
              result.push(...hrefResults.map(item => item));
              break;

            default:
              break;
          }

          if (result && result.length > 0) {
            console.log(result, 'Google');
          }
        }

        await browser.close();
      }
    } catch (err) {
      console.error('Error occurred:', err);
    }
  }
  async getWikipediaSummary(title) {
    try {
      const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const shortDescription = data.extract;
        const imageSource = data.originalimage?.source || null;
        return { description: shortDescription, image: imageSource };
      } else {
        throw new Error('Wikipedia API request failed');
      }
    } catch (error) {
      console.error('Error fetching Wikipedia data:', error.message);
      return null;
    }
  }
}
async function SU_Dep(s, DataSU) {
  try {
    console.log("SU_Dep function called with input:", s);
    let ss = s.toLowerCase(); 
    const dataRegex = /Query:⁂([^⁂]+)⁂Reply:⁂([^⁂]+)⁂/g;
    let maxscore = 0;
    let I = -1;
    let maxIndex = -1; 
    let DataParse = [];
    let DataString = DataSU.toString();
    const matches = [...DataString.matchAll(dataRegex)];
    if (matches.length === 0) {
      console.log("No matches found in DataSU.");
      return; 
    }
    matches.forEach(match => {
      DataParse.push({ query: match[1].replace(/\s+/g, ''), reply: match[2] }); // Normalize queries
    });

    console.log("DataParse:", JSON.stringify(DataParse, null, 2));

    // Jaccard similarity function
    const jaccardSimilarity = (setA, setB) => {
      const intersection = [...setA].filter(x => setB.has(x));
      const union = new Set([...setA, ...setB]);
      return intersection.length / union.size;
    };

    for (let i = 0; i < DataParse.length; i++) {
      try {
        const currentQuery = DataParse[i].query;
        if (currentQuery.length === 0) {
          console.warn(`Empty query found at index ${i}.`);
          continue;
        }
        const setSS = new Set(ss);
        const setCurrentQuery = new Set(currentQuery);
        
        const score = jaccardSimilarity(setSS, setCurrentQuery);
        console.log(`Comparing: ${ss} with ${currentQuery}, Score: ${score}`);

        if (score > maxscore) {
          maxscore = score;
          I = i; 
        }
        if (score > 0 && (maxIndex === -1 || score > jaccardSimilarity(new Set(ss), new Set(DataParse[maxIndex].query)))) {
          maxIndex = i;
        }
      } catch (err) {
        console.error(`Error during loop iteration ${i}:`, err);
      }
    }
    if (I !== -1) {
      const reply = DataParse[I].reply;
      console.log("Found matching reply:", reply);
      if (reply === '.344.') {
        search(I, ss);
      } 
      else {
        console.log(`\x1b[36m${reply}\x1b[0m`);Q();
      }
    } else if (maxIndex !== -1) {
      const reply = DataParse[maxIndex].reply;
      console.log("Returning reply with the highest score:", reply);
      console.log(`\x1b[36m${reply}\x1b[0m`);Q();
    } else {
      console.log("No matching query found.");Q();
    }
  } catch (err) {
    console.error('Error in SU_Dep:', err);
  }
}
async function search(index, ss) {
  console.log(ss)
  const match = ss.match(/(.+)\s+(.+)$/);
  if (match) {
    const two = match[2];
    const wk = new Bootfunc();
    const result = await wk.getWikipediaSummary(two);
    if (result && result.description && result.image) {
      console.log(`\x1b[36mImage: ${result.image}\nDescription: ${result.description}\x1b[0m`);
    }Q();
  }
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});






