@echo off

:RESTART
color b
type hynse.txt
SET num=1
SET serverjar=purpur-1.19.3-1894
SET jdk=%LIGHT_JDK_18%/bin/java.exe
SET mem=24576
SET port=30001
echo Starting Instance %num% - %serverjar%
title Instance %num% - %serverjar%
%jdk% -Xms%mem%M -Xmx%mem%M -DPurpur.IReallyDontWantSpark=false --add-modules=jdk.incubator.vector -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -XX:G1NewSizePercent=40 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -jar %serverjar%.jar --nogui --port %port%
timeout 5
color c
type hynse.txt
GOTO RESTART
pause