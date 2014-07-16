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
    spawn_server("cd frontend && ember server --proxy http://127.0.0.1:#{rails_port} "),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end
