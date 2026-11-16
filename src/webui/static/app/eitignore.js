tvheadend.eitignore = function(panel, index) {

    tvheadend.idnode_grid(panel, {
        url: 'api/eitignore',
        titleS: _('EIT Ignore Rule'),
        titleP: _('EIT Ignore Rules'),
        iconCls: 'baseconf',
        tabIndex: index,
        columns: {
            enabled:        { width: 70 },
            name:           { width: 200 },
            channel:        { width: 200 },
            title:          { width: 250 },
            fulltext:       { width: 70 },
            language:       { width: 100 },
            minduration:    { width: 100 },
            maxduration:    { width: 100 },
            comment:        { width: 250 }
        },
        add: {
            url: 'api/eitignore',
            create: { }
        },
        del: true,
        uilevel: 'expert',
        sort: {
          field: 'name',
          direction: 'ASC'
        }
    });

    return panel;

}
