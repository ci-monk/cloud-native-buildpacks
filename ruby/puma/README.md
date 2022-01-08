# Ruby example app using Puma

## Building

```bash
pack build puma-sample --buildpack gcr.io/paketo-buildpacks/ruby --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run -it --rm -p 9292:9292 puma-sample
```

## Viewing

```bash
curl http://localhost:9292
```
