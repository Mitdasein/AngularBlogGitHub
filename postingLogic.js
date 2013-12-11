 {
        "_id" : ObjectId("4b2d75476cc613d5ee930164"),
        "title" : "A blog post",
        "content" : "...",
        "comments" : [
            {
                "name" : "joe",
                "email" : "joe@example.com",
                "content" : "nice post."


Each post has:
"_id" : system generated
time  : system generated
author: from login
"title" : entered by author
"content" : entered by author
"category": selected by author from a pull-down)
("tags" : optional, array entered by author, maybe add this later)
"comments" : Optional, entered by one or more commentators

<template name="newPost">
  <h2>New Post</h2>
  <p>
  <input name="title" id="title" size="30">
  </p><p>
  <textarea id="content" name="content" cols="50" rows="5"></textarea>  
  </p><p>
  <button type="button">Post</button>

</template>

blog post form has textbox fields for:
"title"
"content"
dropdown menu for:
"category"
and hidden/generated fields for:
"_id"
time
author

blog display form shows:
"title"
"content"
"time"
"category"
"comments" - allow anonymous comments? - yes, for now
                "name" 
                "email" (optional)
                "content" 

> post = {"title" : "My Blog Post",
... "content" : "Here's my blog post",
... "date" : new Date()}
{
  "title": "My Blog Post",
  "content" : "Here's my blog post.",
  "date" : ISODate("2012-08-24T21:12:09.982Z")
}



<template name="postForm">  
{{#if isAdmin}} 
  {{> newPost}}
{{/if}}
</template>

<template name="newPost">
  <h2>New Post</h2>
  <p>
  <input name="postTitle" id="postTitle" size="30">
  </p><p>
  <textarea id="postBody" name="postBody" cols="50" rows="5"></textarea>  
  </p><p>
  <button type="button">Post</button>
</template>

<template name="showPosts">
  <h2>Posts</h2>
  <hr>
  {{#each posts}}
    {{>showOnePost}}     
  {{/each}}
</template>

<template name="showOnePost">
    <h3>{{title}}</h3>
    <p>{{postDate}}</p>
    <p>{{body}}</p>
<!--
<a class="removePost">delete</a> 
-->
</template>

*/

Analytics:

db.analytics.update({"url" : "/blog"}, {"$inc" : {"pageviews" : 1}}, true)
> db.users.update({"rep" : 25}, {"$inc" : {"rep" : 3}}, true) > db.users.findOne()
{
        "_id" : ObjectId("4b3295f26cc613d5ee93018f"),
"rep" : 28 }


updating/  setOnInsert

> db.users.update({}, {"$setOnInsert" : {"createdAt" : new Date()}}, true) > db.users.findOne()
{
        "_id" : ObjectId("512b8aefae74c67969e404ca"),
        "createdAt" : ISODate("2013-02-25T16:01:50.742Z")
    }


Displaying posts:
If # of posts is <= 10, keep it to one page 
if # of posts is >10, go onto second page

For example, suppose we had a blog post document and we wanted to return the first 10 comments:
> db.blog.posts.findOne(criteria, {"comments" : {"$slice" : 10}}) Alternatively, if we wanted the last 10 comments, we could use −10:
> db.blog.posts.findOne(criteria, {"comments" : {"$slice" : -10}})


Dropdown menu of categories with UI Bootstrap
Dropdown toggle.
ui.bootstrap.dropdownToggle

HTML:
<li class = "dropdown" ng-controller=DropdownCtrl">
    <a clas="dropdown-toggle">
    Select a category:
    </a>
    <ul class="dropdown-menu">
        <li ng-repeat="choice in categories">
            <a>{{choice}}</a>
          </li>
        </ul>
      </li>

JS:
<script>
function DropdownCtrl($scope) {
    $scope.categories = [
      "Food",
      "Code",
      "Cats",
      "Coffee",
      "Books",
      "Music",
      "Film",
      "Other"
    ];
}
</script>



Datepicker to view past entries? -  UI Bootstrap
ui.bootstrap.datepicker

Pagination:
ui.bootstrap.Pagination



