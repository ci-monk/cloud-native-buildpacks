# Go Sample App using no imports

## Building

```bash
pack build go-sample --buildpack gcr.io/paketo-buildpacks/go
```

## Running

```bash
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 go-sample
```

## Viewing

```bash
curl http://localhost:8080
```
