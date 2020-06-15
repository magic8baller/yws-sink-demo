export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee7c70c122efe01990efc85',
                  title: 'Sanity Studio',
                  name: 'yws-sink-demo-studio',
                  apiId: '9a762c11-06bd-4c9d-90e9-6aed3fb5b38e'
                },
                {
                  buildHookId: '5ee7c70ce74ae20262a34399',
                  title: 'Blog Website',
                  name: 'yws-sink-demo',
                  apiId: 'd435f90d-168e-4729-8cf1-bf38ef084c81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magic8baller/yws-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://yws-sink-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
