export default {
    template: `
<code>
  <a
    v-if="domain && domain.length > 0"
    target="_blank"
    :href="'http://' + subdomain + '.' + domain + '.messwithdns.com'"
    >{{subdomain}}.{{ domain }}.messwithdns.com</a
  >
  <span v-else>
    <span class="text-green-700">tu-dominio</span>.messwithdns.com
  </span>
</code>
    `,
    props: ['domain', 'subdomain'],
}
