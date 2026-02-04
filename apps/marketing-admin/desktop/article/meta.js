const forms = require('../forms');
const like = require('./like');

module.exports = {
    Block: {
        rerender: {
            name: 'meta',
        },
        data: {
            journal: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model: '$data.app.models.ToolkitArticle',
                        type: 'query',
                        query: 'ToolkitArticle',
                        arguments: {
                            _id: '$data.router.params.articleId',
                        },
                        resolve: {
                            _id: true,
                            title: true,
                            resourceType: true,
                            updateFlag: true,
                            articleStatus: true,
                            topics: true,
                            subResource: true,
                            subResourceType: true,
                            thumbnailId: true,
                            flaggedById: true,
                            flaggedBy: true,
                            isPinned: true,
                            flagNote: true,
                            allBookmarks: true,
                            bookmark: true,
                        },
                    },
                },
            },
        },
        skeleton: {
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                align-items: flex-start;
                                gap: 16px;
                                @media only screen and (max-width: 680px) {
                                    flex-direction: column;
                                }
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                width: 100%;
                                                width: 150px;
                                                height: 120px;
                                                overflow: hidden;
                                                background-color: #e5e5e5;
                                            `,
                                            layout: [
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                display: flex;
                                                                flex:1;
                                                                width: 100%;
                                                                width: 150px;
                                                                height: 120px;
                                                                margin-right: 1.5rem;
                                                                overflow: hidden;
                                                                background-color: #e5e5e5;
                                                            `,
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                width: 100%;
                                            `,
                                            layout: [
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                width: 150px;
                                                                border-radius: 10px;
                                                                height: 18px;
                                                                margin-top: 10px;
                                                            `,
                                                        },
                                                    },
                                                },
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                width: 450px;
                                                                border-radius: 10px;
                                                                height:  18px;
                                                                margin-top: 10px;
                                                            `,
                                                        },
                                                    },
                                                },
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                width: 50%;
                                                                border-radius: 10px;
                                                                height:  18px;
                                                                margin-top: 10px;
                                                            `,
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
        props: {
            styles: `
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 8px;
            `,
            journal: '$data.journal.value',
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                align-items: flex-start;
                                gap: 16px;
                                justify-content: space-between;
                                flex: 1;
                                @media only screen and (max-width: 991px) {
                                    flex-direction: column;
                                }
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: flex-start;
                                                gap: 16px;
                                                @media only screen and (max-width: 680px) {
                                                    flex-direction: column;
                                                }
                                            `,
                                            layout: [
                                                {
                                                    Block: {
                                                        props: {
                                                            previewfile: '$data.root.root.root.journal.thumbnailId',
                                                            layout: [
                                                                {
                                                                    Image: {
                                                                        condition: {
                                                                            operator: 'notEmpty',
                                                                            values: [
                                                                                '$data.root.previewfile',
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            styles: `
                                                                            width: 100%;
                                                                            width: 150px;
                                                                            height: 120px;                                                
                                                                            border-radius: 10px;
                                                                            overflow: hidden;
                                                                            background-color: rgb(229, 229, 229);
                                                                            `,
                                                                            placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
                                                                            src: '`$data.app.settings.FileAPI.value`/download/`$data.root.previewfile`',
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    Image: {
                                                                        condition: {
                                                                            operator: 'empty',
                                                                            values: [
                                                                                '$data.root.previewfile',
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            styles: `
                                                                            width: 100%;
                                                                            width: 150px;
                                                                            height: 120px;                                                
                                                                            border-radius: 10px;
                                                                            overflow: hidden;
                                                                            background-color: rgb(229, 229, 229);
                                                                            `,
                                                                            placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                                {
                                                    Block: {
                                                        props: {
                                                            styles: `
                                                                display: flex;
                                                                align-items: flex-start;
                                                                justify-content: space-between;
                                                                flex:1;
                                                            `,
                                                            layout: [
                                                                {
                                                                    Block: {
                                                                        props: {
                                                                            styles: `
                                                                                display: flex; 
                                                                                flex-direction:column; 
                                                                            `,
                                                                            layout: [
                                                                                {
                                                                                    Block: {
                                                                                        props: {
                                                                                            styles: `display:flex;
                                                                                            flex-direction:row;
                                                                                            width:100%;
                                                                                            flex:1;
                                                                                            align-items:center;
                                                                                            justify-content:flex-start;`,
                                                                                            layout: [
                                                                                                {
                                                                                                    Text: {
                                                                                                        condition: {
                                                                                                            operator: 'notEmpty',
                                                                                                            values: [
                                                                                                                '$data.root.root.root.root.root.root.journal.resourceType',
                                                                                                            ],
                                                                                                        },
                                                                                                        props: {
                                                                                                            styles: `
                                                                                                                display: flex;
                                                                                                                align-items: center;
                                                                                                                position: relative;
                                                                                                                color: #909090;
                                                                                                                font-size: 14px;
                                                                                                                font-weight: 500;
                                                                                                                line-height: 1.5; 
                                                                                                            `,
                                                                                                            children: '$data.root.root.root.root.root.root.journal.resourceType',
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                },
                                                                                {
                                                                                    Heading: {
                                                                                        props: {
                                                                                            styles: `
                                                                                                display: -webkit-box;
                                                                                                -webkit-line-clamp: 2;
                                                                                                -webkit-box-orient: vertical;
                                                                                                overflow: hidden;
                                                                                                margin-bottom: 8px;
                                                                                            `,
                                                                                            children: '$data.root.root.root.root.root.journal.title',
                                                                                        },
                                                                                    },
                                                                                },
                                                                                {
                                                                                    Block: {
                                                                                        condition: {
                                                                                            operator: 'notEmpty',
                                                                                            values: [
                                                                                                '$data.root.root.root.root.root.journal.topics',
                                                                                            ],
                                                                                        },
                                                                                        props: {
                                                                                            styles: `display:flex;
                                                                                            flex-direction:row;
                                                                                            width:100%;
                                                                                            flex:1;
                                                                                            align-items:center;
                                                                                            justify-content:flex-start;`,
                                                                                            layout: [
                                                                                                {
                                                                                                    Text: {
                                                                                                        data: {
                                                                                                            subresourcetype: {
                                                                                                                from: 'RESOLVE',
                                                                                                                value: {
                                                                                                                    __RESOLVE: 'ANY',
                                                                                                                    __PATH: '$data.root.root.root.root.root.root.journal',
                                                                                                                    __PIPELINE: [
                                                                                                                        {
                                                                                                                            function: {
                                                                                                                                params: 'values',
                                                                                                                                values: ['$data'],
                                                                                                                                function: ` 
                                                                                                                                    var subresourcetype=''
                                                                                                                                    subresourcetype = values.topics.join(' | ');
                                                                                                                                    return subresourcetype;
                                                                                                                                `,
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                        props: {
                                                                                                            styles: `
                                                                                                                display: flex;
                                                                                                                align-items: center;
                                                                                                                position: relative;
                                                                                                                color: #909090;
                                                                                                                font-size: 14px;
                                                                                                                font-weight: 500;
                                                                                                                line-height: 1.5; 
                                                                                                            `,
                                                                                                            children: '$data.subresourcetype',
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                },
                                                                                {
                                                                                    Block: {
                                                                                        condition: {
                                                                                            operator: 'notEmpty',
                                                                                            values: [
                                                                                                '$data.root.root.root.root.root.journal.articleStatus',
                                                                                            ],
                                                                                        },
                                                                                        props: {
                                                                                            styles: `display:flex;
                                                                                            flex-direction:row;
                                                                                            width:100%;
                                                                                            flex:1;
                                                                                            align-items:center;
                                                                                            justify-content:flex-start;
                                                                                            margin-top: 4px;`,
                                                                                            layout: [
                                                                                                {
                                                                                                    Text: {
                                                                                                        props: {
                                                                                                            styles: `
                                                                                                                display: flex;
                                                                                                                align-items: center;
                                                                                                                position: relative;
                                                                                                                color: #909090;
                                                                                                                font-size: 12px; 
                                                                                                                line-height: 1.5; 
                                                                                                            `,
                                                                                                            children: '$data.root.root.root.root.root.root.journal.articleStatus',
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        data: {
                                            isAdmin: {
                                                from: 'RESOLVE',
                                                value: {
                                                    __RESOLVE: 'ANY',
                                                    __PATH: '$data.app.roles',
                                                    __PIPELINE: [
                                                        {
                                                            function: {
                                                                params: 'values',
                                                                values: ['$data'],
                                                                function: `
                                                                    var opt = false;
                                                                    if(values.indexOf('Admin') !== -1){
                                                                        opt = true;
                                                                    } 
                                                                    return opt;
                                                                `,
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        },
                                        props: {
                                            isAdmin: '$data.isAdmin',
                                            styles: `
                                                display: flex;
                                                gap: 8px;
                                                flex-wrap: wrap;
                                                justify-content: flex-end;
                                                @media only screen and (max-width: 991px) {
                                                    justify-content: flex-start;
                                                }
                                                .on-hover{
                                                    &:hover {
                                                        background-color:#f0f0f0;
                                                    }
                                                }
                                            `,
                                            layout: [
                                                {
                                                    Block: {
                                                        condition: {
                                                            operator: '===',
                                                            values: ['$data.root.root.root.journal.updateFlag', true],
                                                        },
                                                        props: {
                                                            styles: 'display: flex; align-items: center; gap:4px;',
                                                            layout: [
                                                                {
                                                                    Text: {
                                                                        props: {
                                                                            variants: ['small', 'secondary'],
                                                                            children: 'Flagged for update',
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    Text: {
                                                                        condition: {
                                                                            operator: 'notEmpty',
                                                                            values: ['$data.root.root.root.root.journal.flaggedById'],
                                                                        },
                                                                        props: {
                                                                            variants: ['small', 'secondary'],
                                                                            children: 'by',
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    Link: {
                                                                        condition: {
                                                                            operator: 'notEmpty',
                                                                            values: ['$data.root.root.root.root.journal.flaggedById'],
                                                                        },
                                                                        props: {
                                                                            styles: `
                                                                                font-size: 14px;
                                                                                &:hover {
                                                                                    text-decoration: underline;
                                                                                }
                                                                            `,
                                                                            to: '/`$data.app.settings.peopleAppId.value`/`$data.root.root.root.root.journal.flaggedById`',
                                                                            target: '_blank',
                                                                            // eslint-disable-next-line max-len
                                                                            children: '`$data.root.root.root.root.journal.flaggedBy.name.first` `$data.root.root.root.root.journal.flaggedBy.name.last`',
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                                {
                                                    OutlineButton: {
                                                        condition: {
                                                            operator: '===',
                                                            values: ['$data.root.root.root.journal.articleStatus', 'Published'],
                                                        },
                                                        props: {
                                                            styles: `
                                                                flex-direction: row-reverse;
                                                                gap: 4px;
                                                                &.icon {
                                                                    i {
                                                                        margin: 0;
                                                                    }
                                                                }
                                                            `,
                                                            variants: ['medium', 'small', 'rounded', 'primary'],
                                                            children: 'Published Page',
                                                            icon: 'arrow-up-right-from-square',
                                                            onClick: {
                                                                action: 'navigate',
                                                                arguments: {
                                                                    url: '/`$data.app.settings.marketingToolkitAppId.value`/search/`$data.router.params.articleId`',
                                                                    newTab: true,
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    Block: {
                                                        data: {
                                                            styles: {
                                                                from: 'RESOLVE',
                                                                value: {
                                                                    __RESOLVE: 'ANY',
                                                                    __PATH: {
                                                                        bookmark: '$data.root.root.root.journal.bookmark',
                                                                    },
                                                                    __PIPELINE: [{
                                                                        function: {
                                                                            params: 'values',
                                                                            values: ['$data'],
                                                                            function: `
                                                                                var obj = {
                                                                                    borderColor:'rgb(230, 230, 230)',
                                                                                    background:'transparent',
                                                                                    color:'#000',
                                                                                }
                                                                                if(values.bookmark != null){ 
                                                                                    if(values.bookmark.length > 0){
                                                                                        obj = {
                                                                                            borderColor:'#f04939',
                                                                                            background:'#f04939',
                                                                                            color:'#fff'
                                                                                        }
                                                                                    }
                                                                                } 
                                                                                return obj;
                                                                            `,
                                                                        },
                                                                    }],
                                                                },
                                                            },
                                                        },
                                                        props: {
                                                            styles: `
                                                                display: inline-flex;
                                                                -webkit-box-align: center;
                                                                align-items: center;
                                                                flex-shrink: 0;
                                                                cursor: pointer;
                                                                box-shadow: none;
                                                                background-color: transparent;
                                                                color: rgb(45, 45, 45);
                                                                border: 1px solid rgb(230, 230, 230);
                                                                font-size: 14px;
                                                                padding: 6px 12px;
                                                                min-height: 30px;
                                                                max-height: 32px;
                                                                border-radius: 8px;
                                                                font-weight: 500;
                                                                margin-right: 8px;
                                                                border:1px solid \`$data.styles.borderColor\`;
                                                                background:\`$data.styles.background\`;
                                                            `,
                                                            stylesData: '$data.styles',
                                                            layout: [
                                                                {
                                                                    Block: {
                                                                        data: {
                                                                            likes: {
                                                                                from: 'RESOLVE',
                                                                                value: {
                                                                                    __RESOLVE: 'ANY',
                                                                                    __PATH: {
                                                                                        bookmark: '$data.root.root.root.root.journal.allBookmarks',
                                                                                    },
                                                                                    __PIPELINE: [{
                                                                                        function: {
                                                                                            params: 'values',
                                                                                            values: ['$data'],
                                                                                            function: `
                                                                                                return values.bookmark != null ? values.bookmark.length : 0;
                                                                                            `,
                                                                                        },
                                                                                    }],
                                                                                },
                                                                            },

                                                                        },
                                                                        props: {
                                                                            className: 'heart-like',
                                                                            bookmark: '$data.root.root.root.root.journal.bookmark.0',
                                                                            likeCount: '$data.likes',
                                                                            bookmarks: '$data.root.root.root.root.journal.allBookmarks',
                                                                            preventDefault: true,
                                                                            styles: `
                                                                                display: flex;
                                                                                color:\`$data.root.stylesData.color\`;
                                                                                flex-direction:row;
                                                                                align-items: center;
                                                                                flex-wrap: nowrap;
                                                                                flex-shrink: 0;
                                                                                i, span{
                                                                                    color:\`$data.root.stylesData.color\`;
                                                                                }
                                                                            `,
                                                                            layout: [
                                                                                like('root.bookmark', 'root.root.root.root.root.journal._id', 'root.likeCount', 'root.bookmarks'),
                                                                                {
                                                                                    Text: {
                                                                                        props: {
                                                                                            styles: `
                                                                                                margin-left: 4px;
                                                                                                color:\`$data.root.root.stylesData.color\`;  
                                                                                            `,
                                                                                            variants: ['medium'],
                                                                                            children: 'Favorites',
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                                {
                                                    Block: {
                                                        props: {
                                                            className: 'on-hover',
                                                            styles: `
                                                                display: inline-flex;
                                                                align-items: center;
                                                                flex-shrink: 0;
                                                                cursor: pointer;
                                                                box-shadow: none;
                                                                background-color: transparent;
                                                                color: rgb(45, 45, 45);
                                                                border: 1px solid rgb(230, 230, 230);
                                                                font-size: 14px;
                                                                padding: 6px 12px;
                                                                min-height: 30px;
                                                                border-radius: 8px;
                                                                font-weight: 500;
                                                                position: relative;
                                                                min-width: 84px;
                                                                &:hover {
                                                                    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.1);
                                                                }
                                                            `,
                                                            layout: [
                                                                {
                                                                    Tooltip: {
                                                                        props: {
                                                                            styles: `
                                                                                position: absolute;
                                                                                margin-right: 0;
                                                                                inset: 0;
                                                                                .icon-wrapper {
                                                                                    width: 100%;
                                                                                    height: 100%;
                                                                                    display: flex;
                                                                                    align-items: center;
                                                                                    padding-left: 12px;
                                                                                }
                                                                            `,
                                                                            icon: 'share-nodes',
                                                                            type: 'light',
                                                                            children: 'Copy',
                                                                            alertText: 'Copied',
                                                                            preventDefault: true,
                                                                            onClick: {
                                                                                action: 'copy',
                                                                                arguments: {
                                                                                    value: '`$data.app.settings.shareUrlBase.value`/`$data.app._id`/`$data.router.params.articleId`',
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    Block: {
                                                                        props: {
                                                                            children: 'Share',
                                                                            styles: `
                                                                                cursor: pointer;
                                                                                padding-left: 24px;
                                                                            `,
                                                                            onClick: {
                                                                                action: 'copy',
                                                                                arguments: {
                                                                                    value: '`$data.app.settings.shareUrlBase.value`/`$data.app._id`/`$data.router.params.articleId`',
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },

                                                            ],
                                                        },
                                                    },
                                                },
                                                {
                                                    OutlineButton: {
                                                        condition: {
                                                            operator: 'and',
                                                            conditions: [
                                                                {
                                                                    operator: '===',
                                                                    values: [
                                                                        '$data.root.root.isAdmin', true,
                                                                    ],
                                                                },
                                                                {
                                                                    operator: 'or',
                                                                    conditions: [

                                                                        {
                                                                            operator: '===',
                                                                            values: [
                                                                                '$data.root.root.root.journal.articleStatus', 'Draft',
                                                                            ],
                                                                        },

                                                                        {
                                                                            operator: 'empty',
                                                                            values: [
                                                                                '$data.root.root.root.journal.articleStatus',
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        props: {
                                                            children: 'Publish',
                                                            icon: 'check',
                                                            onClick: {
                                                                action: 'api',
                                                                arguments: {
                                                                    request: {
                                                                        method: 'POST',
                                                                        url: '`$data.app.settings.baseAPI.value`/graph',
                                                                        withCredentials: true,
                                                                        data: {
                                                                            model: '$data.app.models.ToolkitArticle',
                                                                            type: 'mutation',
                                                                            mutation: 'UpdateToolkitArticle',
                                                                            arguments: {
                                                                                _id: '$data.root.root.root.journal._id',
                                                                                articleStatus: 'Published',
                                                                            },
                                                                        },
                                                                    },
                                                                    onSuccess: [
                                                                        {
                                                                            action: 'rerender',
                                                                            arguments: {
                                                                                name: 'meta',
                                                                            },
                                                                        },

                                                                        {
                                                                            action: 'open',
                                                                            arguments: {
                                                                                element: 'Modal',
                                                                                props: {
                                                                                    styles: `
                                                                                        .modal-block {
                                                                                            position:relative;
                                                                                            width:450px;
                                                                                        }
                                                                                        .modal-body {
                                                                                            display: block;
                                                                                        }
                                                                                        .modal-header{
                                                                                            &:not(:empty) {
                                                                                                height: auto;
                                                                                            }
                                                                                        }
                                                                                    `,
                                                                                    useCapture: false,
                                                                                    title: [
                                                                                        {
                                                                                            H5: {
                                                                                                props: {
                                                                                                    children: '$data.root.root.root.root.journal.title',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                    layout: [
                                                                                        {
                                                                                            Text: {
                                                                                                props: {
                                                                                                    children: 'Toolkit has been published !',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    OutlineButton: {
                                                        condition: {
                                                            operator: 'and',
                                                            conditions: [
                                                                {
                                                                    operator: '===',
                                                                    values: [
                                                                        '$data.root.root.root.journal.updateFlag', true,
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        props: {
                                                            children: 'View Flag Note',
                                                            icon: 'triangle-exclamation',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Edit Flag',
                                                                        layout: [
                                                                            {
                                                                                H5: {
                                                                                    props: {
                                                                                        children: 'Note',
                                                                                    },
                                                                                },
                                                                            },
                                                                            {
                                                                                Paragraph: {
                                                                                    condition: {
                                                                                        operator: 'notEmpty',
                                                                                        values: ['$data.root.root.root.root.journal.flagNote'],
                                                                                    },
                                                                                    props: {
                                                                                        styles: `
                                                                                            margin-top: 8px;
                                                                                        `,
                                                                                        children: '$data.root.root.root.root.journal.flagNote',
                                                                                    },
                                                                                },
                                                                            },
                                                                            {
                                                                                Paragraph: {
                                                                                    condition: {
                                                                                        operator: 'empty',
                                                                                        values: ['$data.root.root.root.root.journal.flagNote'],
                                                                                    },
                                                                                    props: {
                                                                                        styles: `
                                                                                            margin-top: 8px;
                                                                                        `,
                                                                                        children: 'NA',
                                                                                    },
                                                                                },
                                                                            },
                                                                        ],
                                                                        footer: {
                                                                            left: [
                                                                                {
                                                                                    Button: {
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'subtle'],
                                                                                            styles: `
                                                                                                color: #e53935;
                                                                                                i {
                                                                                                    &:before {
                                                                                                        color: #e53935;
                                                                                                    }
                                                                                                }
                                                                                                &:hover {
                                                                                                    color: #e53935;
                                                                                                    i {
                                                                                                        &:before {
                                                                                                            color: #e53935;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            `,
                                                                                            children: 'Remove Flag',
                                                                                            color: 'danger',
                                                                                            onClick: {
                                                                                                action: 'API',
                                                                                                arguments: {
                                                                                                    request: {
                                                                                                        method: 'POST',
                                                                                                        url: '`$data.app.settings.baseAPI.value`/graph',
                                                                                                        withCredentials: true,
                                                                                                        data: {
                                                                                                            model: '$data.app.models.ToolkitArticle',
                                                                                                            type: 'mutation',
                                                                                                            mutation: 'UpdateToolkitArticle',
                                                                                                            arguments: {
                                                                                                                _id: '$data.root.root.root.root.journal._id',
                                                                                                                updateFlag: false,
                                                                                                                flagNote: '',
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                    onSuccess: [
                                                                                                        {
                                                                                                            action: 'rerender',
                                                                                                            arguments: {
                                                                                                                name: 'meta',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            action: 'close',
                                                                                                            arguments: {
                                                                                                                element: 'Sidesheet',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            action: 'open',
                                                                                                            arguments: {
                                                                                                                element: 'Modal',
                                                                                                                props: {
                                                                                                                    styles: `
                                                                                                                        .modal-block {
                                                                                                                            position:relative;
                                                                                                                            width:450px;
                                                                                                                        }
                                                                                                                        .modal-body {
                                                                                                                            display: block;
                                                                                                                            padding-top: 16px;
                                                                                                                        }
                                                                                                                        .modal-header{
                                                                                                                            &:not(:empty) {
                                                                                                                                height: auto;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    `,
                                                                                                                    useCapture: false,
                                                                                                                    title: [
                                                                                                                        {
                                                                                                                            H5: {
                                                                                                                                props: {
                                                                                                                                    children: '$data.root.root.root.root.root.journal.title',
                                                                                                                                },
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                    layout: [
                                                                                                                        {
                                                                                                                            Text: {
                                                                                                                                props: {
                                                                                                                                    children: 'Toolkit content has been updated.',
                                                                                                                                },
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                            right: [
                                                                                {
                                                                                    Button: {
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'subtle'],
                                                                                            children: 'Cancel',
                                                                                            onClick: {
                                                                                                action: 'close',
                                                                                                arguments: {
                                                                                                    element: 'sideSheet',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    TextButton: {
                                        props: {
                                            children: 'Edit',
                                            icon: 'pencil',
                                            onClick: {
                                                action: 'open',
                                                arguments: {
                                                    element: 'SideSheet',
                                                    props: {
                                                        title: 'Edit Article',
                                                        layout: [
                                                            forms.project.thumbnail('root.root.root.journal'),
                                                            forms.project.edit('root.root.root.journal', 'updateJournal'),
                                                        ],
                                                        active: true,
                                                        footer: {
                                                            right: [
                                                                {
                                                                    Button: {
                                                                        props: {
                                                                            variants: ['medium', 'large', 'rounded', 'subtle'],
                                                                            children: 'Cancel',
                                                                            onClick: {
                                                                                action: 'close',
                                                                                arguments: {
                                                                                    element: 'sideSheet',
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    FormButton: {
                                                                        reducer: {
                                                                            form: 'form',
                                                                        },
                                                                        props: {
                                                                            variants: ['medium', 'large', 'rounded', 'primary'],
                                                                            children: 'Submit',
                                                                            formName: 'updateJournal',
                                                                            onClick: {
                                                                                action: 'form',
                                                                                arguments: {
                                                                                    type: 'submit',
                                                                                    name: 'updateJournal',
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },
};
