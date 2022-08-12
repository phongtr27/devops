cp -f /usr/share/nginx/html/index.html /tmp

if [ -n "$REACT_APP_API_PRODUCT" ]; then
sed -i -e "s|REPLACE_API_URI|$REACT_APP_API_PRODUCT|g" /tmp/index.html
fi

if [ -n "$REACT_APP_API_REST" ]; then
sed -i -e "s|REPLACE_CONFLUENCE_URI|$REACT_APP_API_REST|g" /tmp/index.html
fi

cat /tmp/index.html > /usr/share/nginx/html/index.html