function ComposePostFormCntl() {
    // this.state = /^\w\w$/;
    // this.zip = /^\d\d\d\d\d$/;
    this.master = {
        postTitle: 'Post title',
        post: {: 'Write post here',
            tags(separated by commas): 'tag1, tag2',
            Category: 'Category',
            // zip:'12345'
        }
    };———
    this.cancel();
}

composePostFormCntl.prototype = {
    cancel: function () {
        this.form = angular.copy(this.master);
    },

    save: function () {
        this.master = this.form;
        this.cancel();
    },

    isCancelDisabled: function () {
        return angular.equals(this.master, this.form);
    },

    isSaveDisabled: function () {
        return this.userForm.$invalid || angular.equals(this.master, this.form);
    }

};