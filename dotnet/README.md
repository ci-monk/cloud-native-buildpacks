# Dotnet example app using Mod

## Building

```bash
pack build --builder=gcr.io/buildpacks/builder sample-dotnet
```

## Running

```bash
docker run -it -ePORT=8080 -p8080:8080 sample-dotnet
```

## Viewing

```bash
curl http://localhost:8080
```
