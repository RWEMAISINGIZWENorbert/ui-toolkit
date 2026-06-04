import { useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Badge from '../../components/Badge';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import Spinner from '../../components/Spinner';
import { snackbar } from '../../components/Snackbar';

const FAKE_VENDORS = [
  { id: 1, name: 'Alice K.', stall: 'A-12', status: 'active', revenue: 12400 },
  { id: 2, name: 'Bob M.', stall: 'B-03', status: 'pending', revenue: 8200 },
  { id: 3, name: 'Claire N.', stall: 'C-07', status: 'inactive', revenue: 3100 },
  { id: 4, name: 'David R.', stall: 'A-05', status: 'active', revenue: 15600 },
];

const statusBadge = (status) => {
  const map = { active: 'success', pending: 'warning', inactive: 'default' };
  return <Badge variant={map[status] || 'default'}>{status}</Badge>;
};

const columns = [
  { header: 'Vendor', accessor: 'name' },
  { header: 'Stall', accessor: 'stall' },
  { header: 'Status', render: (row) => statusBadge(row.status) },
  {
    header: 'Revenue (RWF)',
    render: (row) => row.revenue.toLocaleString(),
  },
];

const Components = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stall, setStall] = useState('');
  const [search, setSearch] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [inputError, setInputError] = useState('');

  const filteredVendors = FAKE_VENDORS.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-8">
      <Header
        label="Component playground"
        description="Fake data for testing UI primitives — remove before production."
      >
        <Button text="Open modal" variant="primary" onClick={() => setModalOpen(true)} />
        <Button
          text="Toast success"
          variant="outline"
          onClick={() => snackbar.success('Saved successfully (fake)')}
        />
        <Button
          text="Toast error"
          variant="ghost"
          onClick={() => snackbar.error('Something went wrong (fake)')}
        />
      </Header>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card title="Total vendors">
          <p className="text-3xl font-semibold text-text-high">128</p>
          <p className="mt-1 text-sm text-text-low">+12% vs last month (fake)</p>
        </Card>
        <Card title="Active stalls">
          <p className="text-3xl font-semibold text-primary">94</p>
          <p className="mt-1 text-sm text-text-low">73% occupancy (fake)</p>
        </Card>
        <Card title="Revenue">
          <p className="text-3xl font-semibold text-text-high">2.4M RWF</p>
          <p className="mt-1 text-sm text-text-low">This quarter (fake)</p>
        </Card>
      </div>

      <Card title="Buttons" description="Variants and sizes">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            <Button text="Primary" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Outline" variant="outline" />
            <Button text="Ghost" variant="ghost" />
            <Button text="Danger" variant="danger" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button text="Small" variant="outline" size="sm" />
            <Button text="Default" variant="outline" />
            <Button text="Large" variant="outline" size="lg" />
            <Button
              text="Loading"
              variant="primary"
              loading={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 1500);
              }}
            />
            <Button text="Disabled" variant="primary" disabled />
          </div>
        </div>
      </Card>

      <Card title="Form controls">
        <div className="grid max-w-2xl gap-4 md:grid-cols-2">
          <Input
            id="search"
            label="Search vendor"
            placeholder="Type a name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            hint="Filters the table below (fake)"
          />
          <Select
            label="Stall zone"
            value={selectVal}
            onChange={setSelectVal}
            placeholder="Choose zone"
            options={[
              { value: 'a', label: 'Zone A' },
              { value: 'b', label: 'Zone B' },
              { value: 'c', label: 'Zone C' },
            ]}
            hint="Not persisted — demo only"
          />
          <div className="md:col-span-2">
            <Input
              id="stall-demo"
              label="Stall ID (error demo)"
              placeholder="Leave empty and blur"
              value={stall}
              onChange={(e) => {
                setStall(e.target.value);
                setInputError('');
              }}
              onBlur={() => {
                if (!stall.trim()) setInputError('Stall ID is required');
              }}
              error={inputError}
            />
          </div>
        </div>
      </Card>

      <Card title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="default">Default</Badge>
        </div>
      </Card>

      <Card
        title="Vendors"
        description={`${filteredVendors.length} row(s) — fake data`}
        action={
          <Button
            text="Add vendor"
            variant="outline"
            size="sm"
            onClick={() => snackbar.success('Add vendor (fake)')}
          />
        }
      >
        <Table
          columns={columns}
          data={filteredVendors}
          caption="Vendor list for component testing"
        />
      </Card>

      <Card title="Spinner">
        <div className="flex items-center gap-6">
          <Spinner size="small" inline />
          <Spinner size="medium" inline />
          <span className="text-sm text-text-low">Inline spinners</span>
        </div>
      </Card>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Assign stall"
        description="Demo modal with form — no API call."
        footer={
          <>
            <Button
              text="Cancel"
              variant="outline"
              onClick={() => setModalOpen(false)}
            />
            <Button
              text="Save"
              variant="primary"
              onClick={() => {
                snackbar.success('Stall assigned (fake)');
                setModalOpen(false);
              }}
            />
          </>
        }
      >
        <div className="space-y-4">
          <Input
            id="modal-stall"
            label="Stall ID"
            value={stall}
            onChange={(e) => setStall(e.target.value)}
            placeholder="e.g. A-12"
          />
          <Select
            label="Zone"
            value={selectVal}
            onChange={setSelectVal}
            options={['Zone A', 'Zone B', 'Zone C']}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Components;
