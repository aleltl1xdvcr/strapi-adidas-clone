/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import strapiAlgolia from "strapi-plugin-strapi-algolia/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    "users-permissions": usersPermissions,
    "multi-select": multiSelect,
    "strapi-algolia": strapiAlgolia,
  },
});
