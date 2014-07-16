def ember_port
  ENV['EMBER_PORT'] || 4200
end

def rails_port
  ENV['RAILS_PORT'] || 3000
end

def rails_env
  ENV['RAILS_ENV'] || 'development'
end

def spawn_server(command)
  puts command
  spawn command
end

desc "compile and run the site"
task :default do
  pids = [
    spawn_server("cd backend && rails server --environment #{rails_env} --port #{rails_port}"),
    spawn_server("cd frontend && ./node_modules/.bin/ember server --port #{ember_port} --proxy-port #{rails_port} --proxy-host localhost"),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end
