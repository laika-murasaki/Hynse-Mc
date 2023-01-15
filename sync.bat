@echo off

REM Define the source, shared and destination folders
set source=D:\Hynse-Mc\Instance\Survival\plugins\HyacinthHello\PlayerDatabase
set shared=\\DESKTOP-RI3KLHF\sharedserver\HyacinthHello\PlayerDatabase
set destination=D:\Hynse-Mc\Instance\Creative\plugins\HyacinthHello\PlayerDatabase

REM Copy new and modified files from the source to the shared folder
robocopy %source% %shared% /MIR /FFT /Z /XJ

REM Copy new and modified files from the shared folder to the destination
robocopy %shared% %destination% /MIR /FFT /Z /XJ

REM Confirm the files have been copied
echo Files have been copied from %source% to %destination%