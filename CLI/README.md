# 🖥️ OSystem

### CLI
```sh
Start-Process powershell -Verb RunAs
```

### Navigation
```sh
cd ..
cd ____
```

### File Edition
```
touch ____
rm -f ____
```

### Insllations
```sh
choco install ____
choco install ____ -y
choco install ____ --force
```

```sh
where ____
```

### Env Vars
```sh
[System.Environment]::SetEnvironmentVariable("PATH", "$env:PATH;____", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("PATH", "$env:PATH;____", [System.EnvironmentVariableTarget]::Machine)
```

```sh
refreshenv
```

### Error Fixing
```sh
chkdsk C: /f /r /x
```

# 🔋 Fullstack

### All-in-One Installations
```sh
choco install git msys2 python openjdk maven kotlinc gradle nvm nodejs dotnet-sdk golang -y
```
```sh
pip install poetry
```
```sh
npm install yarn nodemon typescript ts-node pm2 bun vite electron electron-vite @types/node @types/electron --global
```
```sh
conda install -n base ipykernel --update-deps --force-reinstall
```


# 🐋 Docker

### Installation
```sh
choco install docker-cli
```


# 🐱 Github

### Install
```sh
choco install git -y
```

### CLI
```sh
cmd1; cmd2;
```
```sh
cmd1 && cmd2
```

### Download
```sh
git clone https://github.com/____.git
git clone https://github.com/____.git C:\Program Files\____
```

### Initialize Repository
```sh
git init
```

### Config
```sh
git config --global user.email "user@mail.com"
git config --global user.name "User Name"
```


# 🖥️ C++

### Installation
```sh
choco install msys2
```

```sh
pacman -Syu
pacman -S mingw-w64-x86_64-gcc
```

### Dependencies
```sh
pacman -S mingw-w64-x86_64-____
```

### Compile/Run
```sh
g++ main.cpp -o main.exe; ./main.exe
```


# 🐍 Python

### Environment Installation
```sh
choco install python
```

```sh
conda install -n base ipykernel --update-deps --force-reinstall
```

```sh
pip install poetry
poetry config pypi-token.pypi ____
```


### Manage Dependencies
```sh
!pip install ____
!pip install ____ --quiet
!pip install ____ --force-reinstall
```

```sh
pip install -r requirements.txt
```

```sh
!pip uninstall ____
```

### Clear Cache
```sh
!pip cache purge
```

### Execute Root
```sh
python .
```

### Publish Repository
```sh
poetry publish --build
```


# 🟦 TScript

### Environment Installation
```sh
choco install nvm nodejs
```
```sh
nvm install node
nvm use node
```
```sh
nvm install 12
nvm use 12
```
```sh
npm i -g yarn nodemon typescript ts-node pm2 bun vite electron electron-vite @types/node @types/electron
```

### Initializers
```sh
npm init
yarn init
tsc --init
bun init
```

### Manage Dependencies
```sh
npm i ____
npm i -g ____
npm install ____
npm install --global ____
yarn add ____
bun i ____
```

```
bun update ____
```

```sh
npm uninstall ____
```

### Creators
```sh
npx create-react-app
npx create-next-app
```
```sh
bun create vite
```

### Frontend Documentation
```sh
npm run storybook
```

### Prisma Automations
```sh
prisma db pull
prisma db push
prisma generate
```

### Execute
```sh
node .
ts-node .
```
```
bun ____.ts
```

### Builders
```sh
tsc
```
```sh
next build
```
```
bun build .                            --outdir dist --target node --dts
bun build src/**/*.ts                  --outdir dist --target node --dts
bun build $(find src -name 'index.ts') --outdir dist --target node --dts
```

### Publish Repository
```sh
npm login
```
```sh
bun publish
```


# ☕ Java

### Installations
```sh
choco install openjdk maven kotlinc gradle -y
```

### Initialize Project
```sh
gradle init
```

```sh
mvn archetype:generate \
  -DgroupId=com.example.demo \
  -DartifactId=my-project \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DinteractiveMode=false
```

```sh
curl https://start.spring.io/starter.zip \
    -d type=maven-project \
    -d bootVersion=3.3.5 \
    -d dependencies=web \
    -d javaVersion=21 \
    -d name=helloworld \
    -d artifactId=helloworld \
    -d baseDir=helloworld \
    -o helloworld.zip
unzip helloworld.zip
```

### Execute Java
```sh
java Main.java
```

```sh
mvn spring-boot:run
```

```sh
kotlinc -script ____.kts
```
