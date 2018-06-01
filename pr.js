require('dotenv');

const github = require('octonode');

// Then we instantiate a client with or without a token (as show in a later section)

const ghme           = client.me();
const ghuser         = client.user('pksunkara');
const ghrepo         = client.repo('pksunkara/hub');
const ghorg          = client.org('flatiron');
const ghissue        = client.issue('pksunkara/hub', 37);
const ghmilestone    = client.milestone('pksunkara/hub', 37);
const ghlabel        = client.label('pksunkara/hub', 'todo');
const ghpr           = client.pr('pksunkara/hub', 37);
const ghrelease      = client.release('pksunkara/hub', 37);
const ghgist         = client.gist();
const ghteam         = client.team(37);
const ghproject      = client.project('pksunkara/hub', 37);
const ghnotification = client.notification(37);

const ghsearch = client.search();
