module.exports = {
    async headers() {
      return [
        {
          source: '/screenshot',
          headers: [
              
            {
              key: 'Content-Type',
              value: 'application/zip',
            },
            {
              key: 'Content-disposition',
              value: 'attatchment; filename=screenshots.zip',
            },
          ],
        },
        {
            source: '/screen',
            headers: [
                
              {
                key: 'Content-Type',
                value: 'image/png',
              }
            ],
          },
      ]
    },
  }