const fields = (path, fieldName) => ({
    [ fieldName ]: {
        __RESOLVE: 'ARRAY',
        __PATH: {
            data: '$data',
        },
        __PIPELINE: [{
            function: {
                params: 'values',
                values: ['$data'],
                function: ` 
                    var tags = values.data.tags;
                    var tagslist=[];
                    if(tags.length > 0){
                        tags.forEach(elmt=>{
                            var tmp = elmt.value.split(" ");
                            var tagvalue = [];
                            
                            tmp.forEach((et, i)=>{
                                tagvalue.push(et[0].toUpperCase()+et.slice(1));
                            })
                            tagslist.push(tagvalue.join(" "))
                        })
                    }
                    return tagslist;
                `,
            },
        }],
    },
});
module.exports = (mutation, id, fieldName, path) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            _id: `$data.${ id }`,
            ...fields(path, fieldName),
        },
        resolve: {
            _id: true,
            keywords: true,
        },
    },
});
