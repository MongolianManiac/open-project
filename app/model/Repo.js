Ext.define('Maniac.model.Repo',{
	extend:'Ext.data.Model',
	idProperty:'id',
	fields:[
		{name:'id',type:'auto'},
		{name:'name',type:'auto'},
		{name:'full_name',type:'auto'},
		{name:'owner',type:'auto'},
		{name:'private',type:'auto'},
		{name:'html_url',type:'auto'},
		{name:'description',type:'auto'},
		{name:'fork',type:'auto'},
		{name:'url',type:'auto'},
		{name:'forks_url',type:'auto'},
		{name:'keys_url',type:'auto'},
		{name:'collaborators_url',type:'auto'},
		{name:'teams_url',type:'auto'},
		{name:'hooks_url',type:'auto'},
		{name:'issue_events_url',type:'auto'},
		{name:'events_url',type:'auto'},
		{name:'assignees_url',type:'auto'},
		{name:'branches_url',type:'auto'},
		{name:'tags_url',type:'auto'},
		{name:'blobs_url',type:'auto'},
		{name:'git_tags_url',type:'auto'},
		{name:'git_refs_url',type:'auto'},
		{name:'trees_url',type:'auto'},
		{name:'statuses_url',type:'auto'},
		{name:'languages_url',type:'auto'},
		{name:'stargazers_url',type:'auto'},
		{name:'contributors_url',type:'auto'},
		{name:'subscribers_url',type:'auto'},
		{name:'subscription_url',type:'auto'},
		{name:'commits_url',type:'auto'},
		{name:'git_commits_url',type:'auto'},
		{name:'comments_url',type:'auto'},
		{name:'issue_comment_url',type:'auto'},
		{name:'contents_url',type:'auto'},
		{name:'compare_url',type:'auto'},
		{name:'merges_url',type:'auto'},
		{name:'archive_url',type:'auto'},
		{name:'downloads_url',type:'auto'},
		{name:'issues_url',type:'auto'},
		{name:'pulls_url',type:'auto'},
		{name:'milestones_url',type:'auto'},
		{name:'notifications_url',type:'auto'},
		{name:'labels_url',type:'auto'},
		{name:'created_at',type:'auto'},
		{name:'updated_at',type:'auto'},
		{name:'pushed_at',type:'auto'},
		{name:'git_url',type:'auto'},
		{name:'ssh_url',type:'auto'},
		{name:'clone_url',type:'auto'},
		{name:'svn_url',type:'auto'},
		{name:'homepage',type:'auto'},
		{name:'size',type:'auto'},
		{name:'watchers_count',type:'auto'},
		{name:'language',type:'auto'},
		{name:'has_issues',type:'auto'},
		{name:'has_downloads',type:'auto'},
		{name:'has_wiki',type:'auto'},
		{name:'forks_count',type:'auto'},
		{name:'mirror_url',type:'auto'},
		{name:'open_issues_count',type:'auto'},
		{name:'forks',type:'auto'},
		{name:'open_issues',type:'auto'},
		{name:'watchers',type:'auto'},
		{name:'master_branch',type:'auto'},
		{name:'default_branch',type:'auto'},
		{name:'network_count',type:'auto'},
	]
});