/*
 *  JL: there are a few issues here I fixed.
 *  
 *  1) the first property of the post object below had no id (I've added title as the id)
 *  2) the tags property had an id that was partly in parens, which is invalid
 *  3) this.master had three dashes after the semicolon, which would have threw a syntax error. Removed.
 *  4) the name of the function was in title case, but elsewhere you have it in camel case.
 */ 
function composePostFormCntl() {
    // this.state = /^\w\w$/;
    // this.zip = /^\d\d\d\d\d$/;
    this.master = {
        postTitle: 'Post title',
        post: {
            title: 'Write post here',
            tags: 'tag1, tag2',
            Category: 'Category'
            // zip:'12345'
        }
    };
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