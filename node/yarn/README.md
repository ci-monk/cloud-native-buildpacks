# Node.js example app using Yarn

## Building

```bash
pack build yarn-sample --buildpack gcr.io/paketo-buildpacks/nodejs --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 yarn-sample
```

## Viewing

```bash
curl http://localhost:8080
```
