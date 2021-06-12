@echo off

git checkout dev
git add .
git commit -m "deploy"
git push origin dev

del /q "robotics\*"
FOR /D %%p IN ("robotics\*.*") DO rmdir "%%p" /s /q

npm run build

exit
