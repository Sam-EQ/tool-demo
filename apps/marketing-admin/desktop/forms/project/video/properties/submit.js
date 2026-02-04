const fields = {
    __RESOLVE: 'OBJECT',
    __PATH: {
        data: '$data',
    },
    __PIPELINE: [{
        function: {
            params: 'values',
            values: ['$data'],
            function: `  
                    var type = 'Link'//values.data.articleVideoType.value;
                    var  obj = {
                        _id : values.data.root.root.root.root.project._id,
                        articleVideoType: type, 
                    } 
                    if(type === 'Link'){
                        var srcProp = values.data.articleVideoLink.value
                        if (srcProp) {
                            const youtubeRegrex = \/^(?:https?:\\\/\\\/)?(?:www\\.)?(?:youtu\\.be\\\/|youtube\\.com\\\/(?:embed\\\/|v\\\/|watch\\?v=|watch\\?.+&v=))((\\w|-){11})(?:\\S+)?$\/;
                            // const vimeoRegrex = \/^(?:https?:\\\/\\\/)?(?:www\\.)?(?:vimeo\\.com\\\/)([0-9]+)$\/;
                            const vimeoRegrex = /(http|https)?:\\/\\/(www\\.|player\\.)?vimeo\\.com\\/(?:channels\\/(?:\\w+\\/)?|groups\\/([^\\/]*)\\/videos\\/|video\\/|)(\\d+)(?:|\\/\\?)/;

                            if (youtubeRegrex.test(srcProp)) { 
                                if (srcProp.includes('embed')) { 
                                    obj["articleVideoLink"] = srcProp;
                                }
                                const match = srcProp.match(youtubeRegrex);
                                if (match && match[1]) { 
                                    obj["articleVideoLink"] = "https://www.youtube.com/embed/"+match[1];
                                }
                            }
                            if (vimeoRegrex.test(srcProp)) {
                                const match = srcProp.match(vimeoRegrex);
                                if (match && match[1]) {
                                    obj["articleVideoLink"] = srcProp;
                                }
                            }
                        }
                    } 
                    return obj;
                `,
        },
    }],
};
module.exports = (mutation) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            ...fields,
        },
    },
});
