# 🖥️ OSystem

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

### Error Fixing
```sh
chkdsk C: /f /r /x
```


# 🐋 Docker

### Installation
```sh
choco install docker-cli
```


# 🐱 Github

### Download
```
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
choco install mingw
choco install llvm
```

# 🐍 Python

### Environment Installation
```sh
conda install -n base ipykernel --update-deps --force-reinstall
```

```sh
pip install poetry
poetry config pypi-token.pypi ____
```

### Install Dependency
```sh
!pip install ____
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
npm i -g yarn
npm i -g typescript 
npm i -g nodemon
npm i -g bun
```

### Package Manager
```sh
npm init
yarn init
bun init
```

### Install Dependency
```sh
npm i ____
npm i -g ____
npm install ____
npm install --global ____
yarn add ____
```

```sh
npm uninstall ____
```

### NPX Creators
```sh
npx create-react-app
npx create-next-app
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

### Execute Root
```sh
node .
ts-node .
```

### Builders
```sh
tsc
```
```sh
next build
```

### Publish Repository
```sh
bun publish
```


# ☕ Java

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
mvn spring-boot:run
```
