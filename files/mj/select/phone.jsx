<Select
    label={Lion.getMessage('phone::phoneType')}
    value={item.phoneType}
    dataSource={this.fetchPhoneTypes}
    dataTextField="description"
    onChange={this.handleChange.phoneType}
    error={error.phoneType}
    required />