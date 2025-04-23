# Installations

```sh
# https://www.msys2.org
choco install msys2 -y
```

```sh
pacman -Syu
pacman -S mingw-w64-x86_64-gcc
```

```json
// .vscode/c_cpp_properties.json
{
    "configurations": [{
        "includePath": [
            "C:/msys64/mingw64/include",
            "C:/msys64/usr/include"
        ]
    }]
}
```


# Manage Dependencies

```sh
pacman -S mingw-w64-x86_64-____
```


# Compile & Run

```sh
g++ main.cpp -o main.exe; ./main.exe
```

# Scripts

```sh
chmod +x install_deps.sh; ./install_deps.sh
```