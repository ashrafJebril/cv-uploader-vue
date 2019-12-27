<template>
  <div id="q-app h-screen flex items-center bg-red">
    <div class="w-3/4 m-auto">
      <Attachment />
    </div>
  </div>
</template>

<script>
import Attachment from "./components/Attachment";

import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
    Attachment: Attachment
  },
  name: "App",
  data() {
    return {
      arr: [],
      msg: "Welcome to Your Vue.js App",
      tempAttachments: [],
      attachments: [],
      dropzoneOptions: {
        // The Url Where Dropped or Selected files will be sent
        url: `https://httpbin.org/post`,
        // File Size allowed in MB
        maxFilesize: 102400000,
        // Authentication Headers like Access_Token of your application
        headers: {
          Authorization: `Access Token`
        },
        // The way you want to receive the files in the server
        paramName: function(n) {
          return "file[]";
        },
        dictDefaultMessage: "Upload Files Here xD",
        includeStyling: false,
        previewsContainer: false,
        thumbnailWidth: 250,
        thumbnailHeight: 140,
        uploadMultiple: true,
        parallelUploads: 20
      }
    };
  },
  methods: {
    upload() {
      this.arr.push(this.$refs.files.files);
      console.log(this.arr);
      // this.encodeToBase64(this.$refs.files.files);
    },
    async encodeToBase64(files) {
      console.log(files);
      var attach = [];
      var reader = [];

      // loop through each of the files in q-uploader

      attach.push(files);
      // attach[i] = await this.singleFileToBase64(i, files, reader);

      console.log(attach);
    },

    singleFileToBase64(i, files, reader) {
      reader[i] = new FileReader();
      // read the file into a base64 format
      reader[i].readAsDataURL(files[i]);

      return new Promise((resolve, reject) => {
        reader[i].onerror = () => {
          reader[i].abort();
          reject("Insert error message here");
        };

        // return the base 64 string
        reader[i].onload = function() {
          resolve(reader[i].result);
        };
      });
    }
  }
};
</script>
<style>
.user-container {
  background: #fdfdfd;
}
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
