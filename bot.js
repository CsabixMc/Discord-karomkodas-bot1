//calling the peckage
var Discord = require('discord.js');
var bot = new Discord.Client();

//Listener Eevent; Message received (this will run every time a message is received)
bot.on('message', message => {
  //variables
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '.'

  //bot
  if (sender.id === '465812187190001664') {
      return;
  }

  //help rendszer
  if (msg === prefix + 'HELP') {
     message.channel.send('Ezek a parancsok:')
     message.channel.send('.ping')
  }

  //ping pong rendszer
  if (msg === prefix + 'PING') {
     message.channel.send('PONG!')
  }

  //torles
  if (message.channel.id === '465781471580520459') {
      if (isNaN(message.content)) {
          message.delete()
          message.author.send('Kérlek a "win-ek" szobába csak számokat irj!')
      }
  }

  //bannolja a csunya szavakat

  if (msg.includes('KUR')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('BUZI')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('BAZD')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('KOCSOG')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('IDIOT')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }

  if (msg.includes('FASZ')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('PICS')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('FUCK')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('GAY')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('GECI')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
    if (msg.includes('SZAR')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('HU')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('HÜ')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
  if (msg.includes('HŰ')) {
      message.delete();
      message.author.send('A káromkodás be van tiltva!')
  }
});

//login
bot.login(process.env.BOT_TOKEN);

//kesz
bot.on('ready', () => {
    console.log('A bot el indult...')
});

bot.on('guildMemberAdd', member => {

    console.log( member.username + 'belépett a szerverbe!')

    var role = member.guild.roles.find('name', 'User');

    member.addRole(role)
});
