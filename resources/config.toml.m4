[server]
protocol = "SERVICE_PROTOCOL"  # server protocol, http or https
port = SERVICE_PORT
apiDoc = false  # set to true for enabling a browser swagger ui

  [server.ssl] # private key and certificate
  key = "SERVICE_PRIVATE_KEY"
  certificate = "SERVICE_CERTIFICATE"

[log]
# level can be "info" ou "debug" ou "warn" ou "error"
level = "LOG_MODE"

# default logs as raw, set to true for json format (more easy to view with Kibana)
jsonFormat = false

  [log.file]  # path: log files location, name: file name
  path = "SERVICE_LOG_FOLDER_PATH"
  name = "fizzbuzzTrace"
  maxSize = 1024000
  maxFiles = 7

[monitor]
# set to true for monitoring server API metrics in prometheus format
enable = true
