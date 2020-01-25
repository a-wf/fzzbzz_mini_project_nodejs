# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [Unreleased]

...
-
-


## [1.0.0] -  2020-01-21

### Changed

- Makefile: Update instructions for test, build, release.

## [0.5.2] -  2020-01-21

### Fixed

- Logger: Log timestamps format, level priority.

## [0.5.1] -  2020-01-21

### Added

- Makefile: Add makefile file
- Dockerfile: Add Dockerfile, docker-compose file

## [0.5.0] -  2020-01-21

### Added

- Routes: Validation of input parameters by using open-api middleware.
- Monitoring: Add metrics generator by using prom-client middleware.
- Tests: Add mocha tests.

## [0.4.1] -  2020-01-21

### Added

- Routes: Validation of input parameters.

## [0.4.0] - 2020-01-21

### Added

- Service: Add fizzbuzz service.

### Changed

- Routes: Remove simple route, add fizzbuzz route.
- Config: Change config.json to toml format, config.toml for adding comment. (Keeping the possibily to load json format config).
  
## [0.3.0] - 2020-01-21

### Added

- App: Express server listener and simple route.
- Logger: Add file format log.

### Changed

- Logger: Change to colorized console logs.

## [0.2.0] - 2020-01-20

### Added

- App: Basic logger service.
- Config: Basic config.json.

## [0.1.0] - 2020-01-20

### Added

- App: Clustering procedure, with one master and one worker by cpu.

## [0.0.1] - 2020-01-20

### Added

- Swagger: SwaggerV2 file for api design.
- Code Rules: Jshint and ESlint.

## [Created] - 2020-01-20
