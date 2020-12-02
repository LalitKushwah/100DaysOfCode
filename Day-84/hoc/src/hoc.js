import React from 'react';

const UpdatedComponet =  OriginalComponent => {
    class NewComponnet extends React.Component {
        render () {
            return <OriginalComponent name="Lalit" />
        }
    }
    return NewComponnet;
}
export default UpdatedComponet;