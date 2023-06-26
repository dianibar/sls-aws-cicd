'use strict';
 
module.exports.getVersion = async (event) => {
    return{
        statusCode:200,
        body: JSON.stringify(
            {
                message: 'sls ci/cd v1'
            },
            null,
            2
        ),
    };
};