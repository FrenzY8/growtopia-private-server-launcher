/*** MADE BY FREENZYSG ***/
/*
- https://dsc.gg/your-http
- .FreenzySG.#2331
*/

// Requirements
const readline = require("readline")
const exetitle = require("console-title")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const os = require("os")
const fs = require("fs")
const _cp = require('child_process')
const { server_ip, server_name, server_region } = require('./build_cfg.json')
function writeLogs(character) {
	fs.appendFileSync(`./gtps-launcher-logs/${namaserver}.txt`, `\n${character}\n`)
}
function isthatLetter(character) {
	try {
		eval("let " + character + ";");
		let regExSpecial = /[^\$_]/;
    		return regExSpecial.test(character);
  	} catch (error) {
    		return false;
  	}
}
const normaldata = `# Copyright (c) 1993-2009 Microsoft Corp. 
# 
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows. 
# 
# This file contains the mappings of IP addresses to host names. Each 
# entry should be kept on an individual line. The IP address should 
# be placed in the first column followed by the corresponding host name. 
# The IP address and the host name should be separated by at least one 
# space. 
# 
# Additionally, comments (such as these) may be inserted on individual 
# lines or following the machine name denoted by a '#' symbol. 
# 
# For example: 
#
#      102.54.94.97     rhino.acme.com          # source server 
#       38.25.63.10     x.acme.com              # x client host 
 
# localhost name resolution is handled within DNS itself. 
#      127.0.0.1       localhost 
#      ::1             localhost`

if(fs.existsSync('build_cfg.json')) {
exetitle(`${server_name} / ${server_ip} / ${server_region}`)
console.log(`

██     ██ ███████ ██       ██████  ██████  ███    ███ ███████ 
██     ██ ██      ██      ██      ██    ██ ████  ████ ██      
██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████   
██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██      
 ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████ 
                                                              
                                                              
`)
console.log(`--- This Program is Open Sourced ---
Visit : https://github.com/FrenzY8/growtopia-private-server-launcher
for get the source

1 : Join ${server_name}
2 : Exit ${server_name}
3 : Join your own server (edit own IPs)`)
rl.question("Answer> ", jawaban => {

	if(!jawaban) {
		console.log("You must given a valid answer.")
		return;
	}

	if (jawaban == "1") {
		const pathhost = `C:/Windows/System32/drivers/etc/hosts`
		// fs.unlinkSync(pathhost)
		console.log(`Joining ${server_name}.. just wait about 3 seconds...`)
		setTimeout(function(waitAsecond) {
		try {
			console.log(`Succes Joining ${server_name}`)
			fs.writeFileSync(pathhost, `${normaldata}\n${server_ip} growtopia1.com\n${server_ip} growtopia2.com`)
			_cp.execFile(`${os.homedir()}/AppData/Local/Growtopia/Growtopia.exe`).on('close', (e, shutdown) => {
				writeLogs(`Succes Joining ${server_name}`)
				if(e) {
					console.log("--- Please run this program as administrator! ---")
					return;
				}
				if(shutdown) {
					console.log("shutdowning.")
					return;
				}
				console.log("Growtopia closed!")
			})
		} catch(noPermission) {
			console.log("--- Please run this program as administrator. ---")
			console.log(noPermission)
			return;
		}
 		}, 3000); // Wait 3 second.
	} else {
		if (jawaban == "2") {
		const pathhost = `C:/Windows/System32/drivers/etc/hosts`
		console.log(`Logged out from ${server_name}.. just wait about 3 seconds...`)
		setTimeout(function(waitAsecond) {
		try {
			writeLogs(`Logged Out from ${server_name}`)
			console.log(`Succes Logged out from ${server_name}`)
			fs.writeFileSync(pathhost, normaldata)
		} catch (noPermission) {
			console.log("--- Please run this program as administrator. ---")
			console.log(noPermission)
			return;
		}
 		}, 3000); // Wait 3 second.
		} else {
		if(jawaban == "3") {
			console.clear()
			console.log("Customize servers IP")
			console.log(`You need others server ip with this, now put other server ip below! remember dont put ${server_name} Ip or this feature will be useless.`)
			rl.question("Other servers ip : ", otherIP => {
				if(!otherIP) {
					console.log("Invalid.")
					return;
			}

				if(isthatLetter(otherIP) == true) {
					console.log("Need an servers ip. not a letter.")
					return;
			}

		const pathhost = `C:/Windows/System32/drivers/etc/hosts`
		// fs.unlinkSync(pathhost)
		console.log(`Joining UNKNOWN SERVER-NAME(${otherIP}).. just wait about 3 seconds...`)
		setTimeout(function(waitAsecond) {
		try {
			console.log(`Succes Joining UNKNOWN SERVER-NAME`)
			fs.writeFileSync(pathhost, `${normaldata}\n${otherIP} growtopia1.com\n${otherIP} growtopia2.com`)
			_cp.execFile(`${os.homedir()}/AppData/Local/Growtopia/Growtopia.exe`).on('close', (e, shutdown) => {
				if(e) {
					console.log("--- Please run this program as administrator! ---")
					return;
				}
				if(shutdown) {
					console.log("shutdowning.")
					return;
				}
				console.log("Growtopia closed!")
			})
		} catch(noPermission) {
			console.log("--- Please run this program as administrator. ---")
			console.log(noPermission)
			return;
		}
 		}, 3000); // Wait 3 second.
			})
		}
		}
	}
})
} else {
console.log(`
███████ ███████ ████████ ██    ██ ██████  
██      ██         ██    ██    ██ ██   ██ 
███████ █████      ██    ██    ██ ██████  
     ██ ██         ██    ██    ██ ██      
███████ ███████    ██     ██████  ██      
                                     
                                     `)
rl.question("Enter the servers name : ", namaserver => {
	if(!namaserver) {
		console.log("Pls enter the correct servers name")
		return;
	}
	rl.question("Enter the servers IP : ", ipserver => {
		if(isthatLetter(ipserver) == true) {
			console.log("Please enter the valid Server IP")
			return;
		}
		if(!ipserver) {
			console.log("Please enter the valid Server IP")
			return;
		}
		rl.question("Enter the servers region (SG) : ", regional => {

const content = `{
	"server_ip": "${ipserver}",
	"server_name": "${namaserver}",
	"server_region": "${regional}"
}`
		fs.writeFileSync('./build_cfg.json', content)
		console.log(`Please wait about 3 seconds... Trying to join ${namaserver}`)
		console.log("This program will be automatically closed... dont worry, you can open it again..")
		fs.writeFileSync(`./gtps-launcher-logs/${namaserver}.txt`, "- NOTHING -")
		setTimeout( function(waitAndOpen) {
			fs.writeFileSync('./build_cfg.json', content)
			fs.appendFileSync(`./gtps-launcher-logs/${namaserver}.txt`, `\nJoining ${namaserver}\n`)
			process.exit();
		}, 3000)
		})
	})
})
}

// Idea : FreenzySG
