let kuro
exports.init = function(bot){ kuro = bot }

exports.run = function(msg, args) {

	if (!args[0]) return msg.delete()

	let userID = args[0].replace('<@', '').replace('>', '')
	let user = msg.guild.members.get(userID)
	if (!user) return msg.delete()

	msg.edit({
		'embed': {
			'title': 'User info for ' + user.user.username,
			'thumbnail': {
				'url': `https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`
			},
			'fields': [
				{
					'name': 'Username',
					'value': user.user.username,
					'inline': true
				},
				{
					'name': 'Discriminator',
					'value': user.user.discriminator,
					'inline': true
				},
				{
					'name': 'User ID',
					'value': user.user.id,
					'inline': true
				},
				{
					'name': 'Nickname',
					'value': user.nickname ? user.nickname : 'N/A',
					'inline': true
				},
				{
					'name': 'Account Creation Date',
					'value': user.user.createdAt.toLocaleDateString(),
					'inline': true
				},
				{
					'name': 'Guild Join Date',
					'value': user.joinedAt.toLocaleDateString(),
					'inline': true
				},
				{
					'name': 'Current Status',
					'value': user.presence.status,
					'inline': true
				}
			]
		}
	})

}