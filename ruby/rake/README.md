# Ruby sample app using Rake

## Building

```bash
pack build rake-sample --buildpack gcr.io/paketo-buildpacks/ruby --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run --interactive --tty rake-sample
```

## Viewing

```bash
curl http://localhost:8080
```
