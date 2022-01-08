# Node.js example app using no package manager

## Building

```bash
pack build nodejs-sample --buildpack gcr.io/paketo-buildpacks/nodejs --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 nodejs-sample
```

## Viewing

```bash
curl http://localhost:8080
```
