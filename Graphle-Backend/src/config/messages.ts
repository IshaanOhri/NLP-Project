const code = {
	homeRoute: 'homeRoute',
	wrongParameters: 'wrongParameters',
	channelCreation: 'channelCreation',
	transmission: 'transmission',
	storyBackup: 'storyBackup',
	invalidChannel: 'invalidChannel',
	alreadyJoined: 'alreadyJoined',
	addingParticipant: 'addingParticipant',
	noParticipant: 'noParticipant',
	removingParticipant: 'removingParticipant'
};

const message = {
	homeRoute: 'Hello World. Welcome to the Graphle Backend!',
	wrongParameters: 'Entered parameters are incorrect',
	channelCreation: 'Error creating channel ID. Try again',
	transmission: 'Error transmitting image URLs to active connections. Try again',
	storyBackup: 'Error taking story backup',
	invalidChannel: 'Entered Channel ID does not exit',
	alreadyJoined: 'The participant is already a part of the channel',
	addingParticipant: 'Error adding participant to database',
	noParticipant: 'Participant not a part of channel',
	removingParticipant: 'Error removing participant from database'
};

export { code, message };
