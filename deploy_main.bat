@echo off

xcopy "dist\*" "robotics\" /f /i /y /s

cd robotics

git checkout main
git add .
git commit -m "deploy"
git push origin main

exit