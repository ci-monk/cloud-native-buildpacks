# Go example app using Mod

## Building

```bash
pack build mod-sample --buildpack gcr.io/paketo-buildpacks/go
```

## Running

```bash
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 mod-sample
```

## Viewing

```bash
curl http://localhost:8080
```
