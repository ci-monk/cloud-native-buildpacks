# Ruby example app using Rake

## Building

```bash
pack build rake-sample --buildpack gcr.io/paketo-buildpacks/ruby --builder paketobuildpacks/builder:base
```

## Running

```bash
docker run -it --rm rake-sample
```

## Result

```bash
I am the rake task that has to run before main
I am the main rake task
```
